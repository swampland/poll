import React, { useState, useEffect } from "react";
import { parties } from "./data";

function Results({ results, answers, onRestart }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/poll/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          console.error("Kunne ikke sende svar");
        }
      })
      .catch((error) => console.error("Feil ved sending av svar:", error));
  }, [answers]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Din politiske tilhørighet
      </h2>
      {results.length > 0 ? (
        <div className="text-center max-w-lg">
          <p className="text-lg text-gray-600 mb-4">
            Basert på dine svar, samsvarer dine synspunkter mest med:
          </p>
          <ul className="space-y-4">
            {results.map((partyCode) => (
              <li key={partyCode} className="p-4 bg-white rounded-lg shadow-sm">
                <strong className="text-xl text-blue-600">
                  {parties[partyCode].name}
                </strong>
                <p className="text-gray-700">{parties[partyCode].description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-lg text-gray-600">
          Ingen klar tilhørighet kunne fastslås basert på dine svar.
        </p>
      )}
      {submitted && (
        <p className="mt-6 text-green-600 font-semibold">
          Takk for at du deltok! Dine svar er registrert.
        </p>
      )}
      <button
        onClick={onRestart}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Start på nytt
      </button>
    </div>
  );
}

export default Results;