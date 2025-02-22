import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import axios from "axios";
import { parties } from "./data";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const generateSessionId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

function Results({ results, answers, onRestart, totalSteps }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const submitResults = async () => {
      try {
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const ipAddress = ipResponse.data.ip;

        const sessionData = {
          timestamp: new Date().toISOString(),
          ipAddress,
          userAgent: navigator.userAgent,
          sessionId: generateSessionId(),
          answers,
          results,
        };

        await addDoc(collection(db, "poll_results"), sessionData);
        setSubmitted(true);
      } catch (error) {
        console.error("Feil ved sending av svar:", error);
      }
    };
    submitResults();
  }, [answers, results]);

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-green-100";
    if (score >= 50) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Din politiske tilhørighet
      </h2>
      <div className="text-center max-w-lg w-full">
        <p className="text-lg text-gray-600 mb-4">
          Her er en rangert oversikt over hvordan dine svar samsvarer med partiene:
        </p>
        {results.length > 0 ? (
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li
                key={result.code}
                className={`flex justify-between items-center p-2 rounded-md shadow-sm text-gray-800 ${getScoreColor(result.score)}`}
              >
                <span className="font-semibold">
                  {index + 1}. {parties[result.code].name}
                </span>
                <span className="text-gray-600">{result.score}%</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-600">
            Ingen partier matchet dine svar fullstendig.
          </p>
        )}
      </div>
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