import React from "react";

function Introduction({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Norsk Politisk Poll 2025
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Svar på en serie spørsmål for å finne ut hvilket politisk parti som passer best med dine synspunkter frem mot stortingsvalget i 2025.
      </p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Start Poll
      </button>
    </div>
  );
}

export default Introduction;