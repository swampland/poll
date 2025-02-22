import React, { useState } from "react";

function Question({ question, onAnswer, currentStep, totalSteps }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(question.id, selectedOption);
      setSelectedOption(null);
    }
  };

  if (!question) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <p className="text-lg text-red-600">En feil oppstod: Spørsmålet kunne ikke lastes.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-sm text-gray-600 mb-2">
        Spørsmål {currentStep} av {totalSteps}
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center max-w-lg">
        {question.text}
      </h2>
      <div className="space-y-4 w-full max-w-md">
        {question.options.map((option) => (
          <label
            key={option.id}
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleSelect(option.value)}
              className="form-radio text-blue-600"
            />
            <span className="text-gray-700">{option.text}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedOption === null}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Neste
      </button>
    </div>
  );
}

export default Question;