import React from "react";

function Introduction({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 to-blue-400 p-4">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Velkommen til Valgomaten for Partiguiden 2025</h1>
      <p className="text-lg text-white mb-6 text-center max-w-md">
        Finn ut hvilke partier passer best for dine politiske synspunkter. Trykk på "Start" for å begynne!
      </p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors"
      >
        Start
      </button>
    </div>
  );
}

export default Introduction;