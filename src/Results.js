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
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
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
    <div className="flex flex-col items-center justify-center min-h-screen md:min-h-screen sm:h-auto bg-gray-100 p-4 sm:p-2">
      <div className="bg-white p-6 sm:p-4 rounded-2xl shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-4 text-center">Din politiske tilhørighet</h1>
        <p className="text-lg sm:text-base text-gray-600 mb-6 sm:mb-4 text-center">
          Her er en rangert oversikt over hvordan dine svar samsvarer med partiene:
        </p>
        <ul className="space-y-4 sm:space-y-2">
          {results.length > 0 ? (
            results.map((result, index) => (
              <li
                key={result.code}
                className={`flex flex-col sm:flex-row items-center sm:items-start p-2 sm:p-3 rounded-md shadow-sm text-gray-800 ${getScoreColor(result.score)}`}
              >
                <span className="w-12 sm:w-16 font-semibold text-right mr-2 sm:mr-4 mb-2 sm:mb-0">{index + 1}.</span>
                <div className="flex-1 w-full sm:w-auto">
                  <span className="font-semibold block sm:inline">{parties[result.code].name}</span>
                  <div className="w-full bg-gray-200 h-4 mt-1 sm:mt-2 rounded-full">
                    <div
                      className={`h-4 rounded-full ${result.score >= 80 ? "bg-green-500" : result.score >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  <span className="block sm:inline sm:ml-4 text-gray-600 text-right sm:text-left">{result.score}%</span>
                </div>
              </li>
            ))
          ) : (
            <p className="text-lg sm:text-base text-gray-600 text-center">
              Ingen partier matchet dine svar fullstendig.
            </p>
          )}
        </ul>
        {submitted && (
          <p className="mt-6 sm:mt-4 text-green-600 font-semibold text-center">
            Takk for at du deltok! Dine svar er registrert.
          </p>
        )}
        <button
          onClick={onRestart}
          className="mt-8 sm:mt-6 px-6 sm:px-4 py-3 sm:py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Start på nytt
        </button>
      </div>
    </div>
  );
}

export default Results;