import React, { useState } from 'react';

function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem('privacy-notice-closed'));

  const closeNotice = () => {
    localStorage.setItem('privacy-notice-closed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <p className="text-sm">
            Partiguiden samler anonyme data, som anonymisert IP-adresse, begrenset geolokasjon og svar, for å samle statistikk og forbedre tjenesten.
          </p>
        </div>
        <button
          onClick={closeNotice}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium"
        >
          Lukk
        </button>
      </div>
    </div>
  );
}

export default PrivacyNotice;