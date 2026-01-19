"use client";

import { useEffect, useState } from "react";

const text = "Turning ideas into scalable, user-focused web applications.";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-4xl">
        
        {/* NAME */}
        <h2 className="text-sm tracking-widest text-gray-400 mb-4">
          YOGESH NEGI
        </h2>

        {/* CRAZY QUOTE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight 
          bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
          bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* SUB TEXT */}
        <p className="mt-8 text-gray-400 text-lg">
          Frontend Developer • React • Next.js
        </p>

        {/* FOOTER NOTE */}
        <p className="mt-2 text-xs text-gray-500">
          Portfolio launching soon
        </p>

      </div>
    </div>
  );
}
