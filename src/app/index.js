/* eslint-disable react/react-in-jsx-scope */
// STYLES
import './app.css';

// REACT
import { useState, useEffect } from 'react';

// PACKAGES
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

// API KEY
const alanAccessKey = process.env.ALAN_AI_ACCESS_KEY;

// COMPONENTS
import { NewsCards, Modal, Logo, Footer } from '../components';

export default function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // load environment connection with Alan AI
  useEffect(() => {
    alanBtn({
      key: alanAccessKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle(
            (prevActiveArticle) => prevActiveArticle + 1,
          );
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div className="app">
      <Logo />
      <NewsCards
        articles={newsArticles}
        activeArticle={activeArticle}
      />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? <Footer /> : null}
    </div>
  );
}
