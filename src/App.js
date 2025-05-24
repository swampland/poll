import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga"; // For GA4 via react-ga
import { initializeApp } from "firebase/app"; // For Firebase
import { getAnalytics, logEvent } from "firebase/analytics"; // For Firebase Analytics
import Introduction from "./Introduction";
import Question from "./Question";
import Results from "./Results";
import { questions, parties } from "./data";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID, // Brukes av Firebase Analytics
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialiser Firebase Analytics

const TRACKING_ID = process.env.REACT_APP_MEASUREMENT_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [skipCount, setSkipCount] = useState(0); // Teller for antall skips
  const totalSteps = questions.length;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    logEvent(analytics, 'page_view', {
      page_path: window.location.pathname + window.location.search,
    });
  }, [currentStep]);

  const handleStart = () => {
    setCurrentStep(1);
    logEvent(analytics, 'user_action', { action: 'start_quiz' });
    ReactGA.event({
      category: "User Action",
      action: "Start Quiz",
    });
  };

  const handleAnswer = (questionId, optionValue) => {
    setAnswers((prev) => {
      const updatedAnswers = { ...prev, [questionId]: optionValue };
      // Send alle svar til GA4 via Firebase Analytics
      logEvent(analytics, 'poll_answers_submitted', {
        sessionId: Math.random().toString(36).substring(2) + Date.now().toString(36), // Unik ID per hendelse
        answers: JSON.stringify(updatedAnswers), // Alle svar som JSON-streng
        skipCount: Object.values(updatedAnswers).filter(answer => answer === null).length,
        currentStep: currentStep,
      });
      ReactGA.event({
        category: "User Action",
        action: "Answer Question",
        label: questionId,
        value: optionValue,
      });
      return updatedAnswers;
    });
  };

  const handleSkip = () => {
    if (skipCount < 8) {
      setSkipCount((prev) => prev + 1);
      setCurrentStep((prev) => prev + 1);
      setAnswers((prev) => {
        const updatedAnswers = { ...prev, [questions[currentStep - 1].id]: null }; // Merk spørsmålet som hoppet over
        logEvent(analytics, 'poll_answers_submitted', {
          sessionId: Math.random().toString(36).substring(2) + Date.now().toString(36),
          answers: JSON.stringify(updatedAnswers),
          skipCount: Object.values(updatedAnswers).filter(answer => answer === null).length,
          currentStep: currentStep,
        });
        ReactGA.event({
          category: "User Action",
          action: "Skip Question",
        });
        return updatedAnswers;
      });
    } else {
      alert("Du har nådd maksimalt antall hopp (8). Vennligst svar på dette spørsmålet eller gå tilbake.");
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    logEvent(analytics, 'user_action', { action: 'next_question' });
    ReactGA.event({
      category: "User Action",
      action: "Next Question",
    });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    logEvent(analytics, 'user_action', { action: 'back_question' });
    ReactGA.event({
      category: "User Action",
      action: "Back Question",
    });
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setSkipCount(0); // Tilbakestill skip-teller ved restart
    logEvent(analytics, 'user_action', { action: 'restart' });
    ReactGA.event({
      category: "User Action",
      action: "Restart",
    });
  };

  const calculateResults = () => {
    const answeredCount = Object.keys(answers).filter(id => answers[id] !== null).length;
    if (answeredCount < 8) {
      alert("Du må svare på minst 8 spørsmål for å se resultatene. Du har besvart " + answeredCount + " spørsmål.");
      setCurrentStep(totalSteps);
      return null;
    }

    const scores = {};
    const maxDistancePerQuestion = 4;

    Object.keys(parties).forEach((partyCode) => {
      let totalDistance = 0;
      let validQuestions = 0;

      questions.forEach((question) => {
        const userAnswer = answers[question.id];

        if (userAnswer !== null && userAnswer !== undefined) {
          validQuestions++;
          let partyPosition = null;
          question.options.forEach((option) => {
            if (option.parties.includes(partyCode)) {
              partyPosition = option.value;
            }
          });
          if (partyPosition === null) {
            partyPosition = 0;
          }

          let distance = Math.abs(userAnswer - partyPosition);
          const isUserNearZero = Math.abs(userAnswer) <= 0.3;
          const isPartyNearZero = Math.abs(partyPosition) <= 0.3;

          if (isUserNearZero && isPartyNearZero) {
            distance = 0;
          } else if (isUserNearZero || isPartyNearZero) {
            distance *= 2;
          }

          totalDistance += distance;
        }
      });

      if (validQuestions === 0) {
        scores[partyCode] = 0;
      } else {
        const maxPossibleDistance = validQuestions * maxDistancePerQuestion;
        const normalizedDistance = totalDistance / maxPossibleDistance;
        const similarity = 1 - normalizedDistance;
        scores[partyCode] = Math.round(similarity * 100);
      }
    });

    const resultList = Object.keys(scores).map((partyCode) => ({
      code: partyCode,
      score: scores[partyCode],
    }));

    return resultList.sort((a, b) => b.score - a.score);
  };

  const progress = currentStep > 0 && currentStep <= totalSteps
    ? Math.round((currentStep / totalSteps) * 100)
    : 0;

  console.log("Current Step:", currentStep, "Skip Count:", skipCount);

  const pageTitle = currentStep === 0
    ? "Partiguiden Valgomat - Velkommen"
    : currentStep > totalSteps
    ? "Partiguiden Valgomat - Resultater"
    : `Partiguiden Valgomat - Spørsmål ${currentStep} av ${totalSteps}`;

  if (currentStep === 0) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Velkommen til Partiguiden Valgomat. Finn ut hvilke politiske partier passer best til dine synspunkter." />
        </Helmet>
        <Introduction onStart={handleStart} />
      </>
    );
  }

  if (currentStep > totalSteps) {
    const results = calculateResults();
    if (!results) {
      return null;
    }
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Se resultatene dine fra Partiguiden Valgomat og finn ut hvilke partier samsvarer med dine synspunkter." />
        </Helmet>
        <Results
          results={results}
          answers={answers}
          onRestart={handleRestart}
          totalSteps={totalSteps}
        />
      </>
    );
  }

  if (currentStep >= 1 && currentStep <= totalSteps) {
    const question = questions[currentStep - 1];
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={`Svar på spørsmål ${currentStep} i Partiguiden Valgomat for å finne dine politiske preferanser.`} />
        </Helmet>
        <div className="min-h-screen md:min-h-screen sm:h-auto bg-gradient-to-r from-pink-400 to-blue-400 p-4 sm:p-2">
          <div className="w-full bg-gray-200 h-2">
            <div
              className="bg-blue-600 h-2"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <Question
            question={question}
            answers={answers}
            onAnswer={handleAnswer}
            onSkip={handleSkip}
            onNext={handleNext}
            onBack={handleBack}
            currentStep={currentStep}
            totalSteps={totalSteps}
            canGoBack={currentStep > 1}
            maxSkips={8}
            skipCount={skipCount}
          />
        </div>
      </>
    );
  }

  return (
    <div>
      <p>En uventet feil oppstod. Vennligst start på nytt.</p>
      <button onClick={handleRestart}>Start på nytt</button>
    </div>
  );
}

export default App;