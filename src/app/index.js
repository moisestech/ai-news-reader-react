/* eslint-disable react/react-in-jsx-scope */

// REACT
import { useState, useEffect } from 'react';

// PACKAGES
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

// API KEY
const alanAccessKey = process.env.ALAN_AI_ACCESS_KEY;

// COMPONENTS
import NewsCards from '../components/NewsCards';
import Logo from '../components/Logo';
import Modal from '../components/Modal';
import Footer from '../components/Footer';

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
      <Logo newsArticles={newsArticles} />
      <NewsCards
        articles={newsArticles}
        activeArticle={activeArticle}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        showFeedback={false}
      />
      {!newsArticles.length ? <Footer /> : null}
    </div>
  );
}
