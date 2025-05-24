import React, { useState, useEffect } from "react";

function Question({ question, answers, onAnswer, onSkip, onNext, onBack, currentStep, totalSteps, canGoBack, maxSkips, skipCount }) {
  const [selectedOption, setSelectedOption] = useState(null);

  // Sett initial valgt alternativ basert på tidligere svar (hvis tilgjengelig), men kun ved tilbake-navigering
  useEffect(() => {
    if (answers && answers[question.id] !== undefined && answers[question.id] !== null) {
      setSelectedOption(answers[question.id]);
    } else {
      setSelectedOption(null); // Nullstill valget for nye spørsmål
    }
  }, [question.id, answers]);

  const handleSelect = (optionValue) => {
    setSelectedOption(optionValue);
    onAnswer(question.id, optionValue);
  };

  const handleClear = () => {
    setSelectedOption(null);
    onAnswer(question.id, null); // Nullstill svaret i App.js
  };

  if (!question) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen md:min-h-screen sm:h-auto bg-gray-100 p-4 sm:p-2">
        <p className="text-lg sm:text-base text-red-600">En feil oppstod: Spørsmålet kunne ikke lastes.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:min-h-screen sm:h-auto bg-gradient-to-r from-pink-400 to-blue-400 p-4 sm:p-2">
      <div className="bg-white p-6 sm:p-4 rounded-2xl shadow-lg max-w-2xl w-full min-h-[500px] sm:min-h-[400px]">
        <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-1">
          Spørsmål {currentStep} av {totalSteps}
        </p>
        <p className="text-lg sm:text-base font-semibold text-gray-700 mb-4 sm:mb-2">{question.category}</p>
        <h2 className="text-2xl sm:text-xl font-bold text-gray-900 mb-6 sm:mb-4 text-center">
          {question.text}
        </h2>
        <div className="flex flex-col items-center">
          {/* Låste radioknapper og tekstetiketter sammen i en fleksibel rad */}
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-row justify-between w-full mb-4 sm:mb-2">
              {question.options.map((option) => (
                <div key={option.id} className="flex flex-col items-center flex-1">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => handleSelect(option.value)}
                    className={`w-8 sm:w-10 h-8 sm:h-10 border-2 border-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
                      selectedOption === option.value ? "border-blue-600 bg-blue-600" : ""
                    }`}
                  />
                  <label
                    onClick={() => handleSelect(option.value)}
                    className={`mt-2 sm:mt-1 text-center cursor-pointer hover:text-blue-600 text-sm sm:text-base text-gray-700 font-medium ${
                      selectedOption === option.value ? "text-blue-600 font-semibold" : ""
                    }`}
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* "Fjern valg"-knapp inni boksen, med fast posisjon */}
          {selectedOption !== null && (
            <button
              onClick={handleClear}
              className="mt-4 sm:mt-2 px-4 sm:px-3 py-2 sm:py-1 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-300 transition-colors"
            >
              Fjern valg
            </button>
          )}
        </div>
      </div>
      <div className="mt-6 sm:mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {canGoBack && (
          <button
            onClick={onBack}
            className="flex items-center px-4 sm:px-3 py-2 sm:py-1 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-300 transition-colors w-full sm:w-auto"
          >
            <span className="mr-2 text-xl sm:text-lg">←</span>
            Tilbake
          </button>
        )}
        {selectedOption !== null ? (
          <button
            onClick={onNext}
            className="flex items-center px-4 sm:px-3 py-2 sm:py-1 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors w-full sm:w-auto"
          >
            Neste
            <span className="ml-2 text-xl sm:text-lg">→</span>
          </button>
        ) : (
          <button
            onClick={onSkip}
            disabled={skipCount >= maxSkips}
            className={`flex items-center px-4 sm:px-3 py-2 sm:py-1 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors w-full sm:w-auto ${
              skipCount >= maxSkips ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Hopp over
            <span className="ml-2 text-xl sm:text-lg">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;