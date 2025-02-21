import React, { useState } from "react";
import Introduction from "./Introduction";
import Question from "./Question";
import Results from "./Results";
import { questions } from "./data";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const calculateResults = () => {
    const scores = {};
    questions.forEach((question) => {
      const selectedOption = answers[question.id];
      if (selectedOption && question.partySupport[selectedOption]) {
        const parties = question.partySupport[selectedOption];
        parties.forEach((party) => {
          scores[party] = (scores[party] || 0) + 1;
        });
      }
    });

    if (Object.keys(scores).length === 0) return [];

    const maxScore = Math.max(...Object.values(scores));
    return Object.entries(scores)
      .filter(([, score]) => score === maxScore)
      .map(([party]) => party);
  };

  console.log("Current Step:", currentStep); // Debugging

  if (currentStep === 0) {
    return <Introduction onStart={handleStart} />;
  }

  if (currentStep > questions.length) {
    const results = calculateResults();
    return <Results results={results} answers={answers} onRestart={handleRestart} />;
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

  // Fallback i tilfelle noe går galt
  return (
    <div>
      <p>En uventet feil oppstod. Vennligst start på nytt.</p>
      <button onClick={handleRestart}>Start på nytt</button>
    </div>
  );
}

export default App;