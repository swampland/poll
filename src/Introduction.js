import React from "react";

function Introduction({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:min-h-screen sm:h-auto bg-gradient-to-r from-pink-400 to-blue-400 p-4 sm:p-2">
      <h1 className="text-3xl sm:text-2xl font-bold text-white mb-6 sm:mb-4 text-center">Velkommen til Valgomaten for Partiguiden 2025</h1>
      <p className="text-lg sm:text-base text-white mb-6 sm:mb-4 text-center max-w-md sm:max-w-sm">
        Finn ut hvilke partier passer best for dine politiske synspunkter. Trykk på "Start" for å begynne!
      </p>
      <button
        onClick={onStart}
        className="px-6 sm:px-4 py-3 sm:py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors"
      >
        Start
      </button>
    </div>
  );
}

export default Introduction;