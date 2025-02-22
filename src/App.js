import React, { useState } from "react";
import Introduction from "./Introduction";
import Question from "./Question";
import Results from "./Results";
import { questions, partyPositions, parties } from "./data";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAnswer = (questionId, optionValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const calculateResults = () => {
    const scores = {};
    const maxDistancePerQuestion = 4; // Maks avstand mellom -2 og 2

    Object.keys(parties).forEach((partyCode) => {
      let totalDistance = 0;
      let validQuestions = 0;

      questions.forEach((question, index) => {
        const userAnswer = answers[question.id];
        const partyPosition = partyPositions[partyCode][index];

        if (userAnswer !== undefined && partyPosition !== undefined) {
          validQuestions++;

          // Manhattan-avstand basert på NRKs algoritme
          let distance = Math.abs(userAnswer - partyPosition);

          // Spesiell håndtering av verdier nær 0 (±0.3)
          const isUserNearZero = Math.abs(userAnswer) <= 0.3;
          const isPartyNearZero = Math.abs(partyPosition) <= 0.3;

          if (isUserNearZero && isPartyNearZero) {
            distance = 0; // Full match hvis begge er nær 0
          } else if (isUserNearZero || isPartyNearZero) {
            distance *= 2; // Dobbel avstand hvis bare én er nær 0
          }

          totalDistance += distance;
        }
      });

      if (validQuestions === 0) {
        scores[partyCode] = 0; // Ingen gyldige svar, sett til 0%
      } else {
        // Normaliser avstand til [0, 1], der 0 er maks avstand og 1 er ingen avstand
        const maxPossibleDistance = validQuestions * maxDistancePerQuestion;
        const normalizedDistance = totalDistance / maxPossibleDistance;
        const similarity = 1 - normalizedDistance; // 1 er nærmest, 0 er lengst unna
        scores[partyCode] = Math.round(similarity * 100); // Konverter til prosent
      }
    });

    const resultList = Object.keys(scores).map((partyCode) => ({
      code: partyCode,
      score: scores[partyCode],
    }));

    return resultList.sort((a, b) => b.score - a.score); // Sorter fra høyest til lavest
  };

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
      <Question
        question={question}
        onAnswer={handleAnswer}
        currentStep={currentStep}
        totalSteps={questions.length}
      />
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