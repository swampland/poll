import React, { useState } from "react";
import Introduction from "./Introduction";
import Question from "./Question";
import Results from "./Results";
import { questions, parties } from "./data";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAnswer = (questionId, optionValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
  };

  const handleSkip = () => {
    setCurrentStep((prev) => prev + 1);
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
  };

  const calculateResults = () => {
    const scores = {};
    const maxDistancePerQuestion = 4;

    Object.keys(parties).forEach((partyCode) => {
      let totalDistance = 0;
      let validQuestions = 0;

      questions.forEach((question) => {
        const userAnswer = answers[question.id];

        if (userAnswer !== undefined) {
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

  const progress = currentStep > 0 && currentStep <= questions.length
    ? Math.round((currentStep / questions.length) * 100)
    : 0;

  console.log("Current Step:", currentStep);

  if (currentStep === 0) {
    return <Introduction onStart={handleStart} />;
  }

  if (currentStep > questions.length) {
    const results = calculateResults();
    return (
      <Results
        results={results}
        answers={answers}
        onRestart={handleRestart}
        totalSteps={questions.length}
      />
    );
  }

  if (currentStep >= 1 && currentStep <= questions.length) {
    const question = questions[currentStep - 1];
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-400 to-blue-400">
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
          totalSteps={questions.length}
          canGoBack={currentStep > 1}
        />
      </div>
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