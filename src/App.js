import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Introduction from "./Introduction";
import Question from "./Question";
import Results from "./Results";
import { questions, parties } from "./data";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [skipCount, setSkipCount] = useState(0); // Teller for antall skips
  const totalSteps = questions.length; // Definer totalSteps her for å unngå no-undef

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAnswer = (questionId, optionValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
  };

  const handleSkip = () => {
    if (skipCount < 8) { // Begrens til 8 skips
      setSkipCount((prev) => prev + 1);
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("Du har nådd maksimalt antall hopp (8). Vennligst svar på dette spørsmålet eller gå tilbake.");
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setSkipCount(0); // Tilbakestill skip-teller ved restart
  };

  const calculateResults = () => {
    const answeredCount = Object.keys(answers).filter(id => answers[id] !== null).length;
    if (answeredCount < 8) { // Sjekk om minst 8 spørsmål er besvart
      alert("Du må svare på minst 8 spørsmål for å se resultatene. Du har besvart " + answeredCount + " spørsmål.");
      setCurrentStep(totalSteps); // Gå tilbake til det siste spørsmålet
      return null;
    }

    const scores = {};
    const maxDistancePerQuestion = 4;

    Object.keys(parties).forEach((partyCode) => {
      let totalDistance = 0;
      let validQuestions = 0;

      questions.forEach((question) => {
        const userAnswer = answers[question.id];

        if (userAnswer !== null && userAnswer !== undefined) { // Kun tell besvarte spørsmål (ikke null)
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
    ? "Norsk Valgomat - Velkommen"
    : currentStep > totalSteps
    ? "Norsk Valgomat - Resultater"
    : `Norsk Valgomat - Spørsmål ${currentStep} av ${totalSteps}`;

  if (currentStep === 0) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Velkommen til Norsk Valgomat. Finn ut hvilke politiske partier passer best til dine synspunkter." />
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
          <meta name="description" content="Se resultatene dine fra Norsk Valgomat og finn ut hvilke partier samsvarer med dine synspunkter." />
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
          <meta name="description" content={`Svar på spørsmål ${currentStep} i Norsk Valgomat for å finne dine politiske preferanser.`} />
        </Helmet>
        <div className="min-h-screen md:min-h-screen sm:h-auto bg-gradient-to-r from-pink-400 to-blue-400 p-4">
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