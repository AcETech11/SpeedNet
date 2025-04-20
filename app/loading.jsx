"use client";
import { useEffect, useState } from "react";

const LoadingPage = () => {
  const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(false), 5000); // Hide after 5s
//     return () => clearTimeout(timer);
//   }, []);

  if (!isVisible) return null; // Hide the loading screen after timeout

  return (
    <div className="flex  items-center justify-center h-screen bg-primary-dark text-primary-light">
      {/* Animated SpeedNet Logo */}
      <div className="text-4xl font-headline animate-pulse">
        Speed
        <span className="font-bold bg-highlight text-primary-light animate-scale">
          Net.
        </span>
      </div>

      {/* SVG Loader */}
      {/* <svg
        className="mt-4 animate-spin"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="white"
          strokeWidth="4"
          strokeDasharray="90 30"
          strokeLinecap="round"
        />
      </svg> */}

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .animate-scale {
          display: inline-block;
          animation: scale 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
