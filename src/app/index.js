import "./app.css";
import { useState, useEffect } from "react";

// ALAN AI
import alanBtn from '@alan-ai/alan-sdk-web';

const alanAccessKey = process.env.ALAN_AI_ACCESS_KEY;

export default function App() {

  // load environment connection with Alan AI
  useEffect(() => {
    alanBtn({
      key: alanAccessKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") {
          console.log(articles);
        }
      }
    })
  }, []);

  return (
    <div className="app">
      <h1>Hello Alan AI!</h1>
    </div>
  );
}