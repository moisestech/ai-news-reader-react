import "./app.css";
import { useState, useEffect } from "react";

// ALAN AI
import alanBtn from '@alan-ai/alan-sdk-web';

// API KEY
const alanAccessKey = process.env.ALAN_AI_ACCESS_KEY;


// COMPONENTSD
import NewsCards from '../components/NewsCards';

export default function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  // load environment connection with Alan AI
  useEffect(() => {
    alanBtn({
      key: alanAccessKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") {
          console.log(articles);
          setNewsArticles(articles);
        }
      }
    })
  }, []);

  return (
    <div className="app">
      <h1>Hello Alan AI!</h1>
      <NewsCards artciles={newsArticles} />
    </div>
  );
}