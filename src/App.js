import './App.css';
import SwitchCategoryButtons from './Components/SwitchCategoryButtons/SwitchCategoryButtons';
import CategoryHeader from './Components/CategoryHeader/CategoryHeader';
import Article from './Components/Article/Article';
import { categoriesList } from './utils';
import { useEffect, useState, useRef } from 'react';

import imgUrl from './images/dowjones.jpeg';
const apiKey = 'test';

const results = [
  {
    title: `Dow Jones Futures Fall As Market Rally Feels Fed Chief Powell's 'Pain'`,
    link: `https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-feels-fed-chief-powell-pain-what-to-do/`,
    description: `Dow Jones futures fell solidly Sunday night, along with S&P 500 futures and Nasdaq futures. The stock market rally suffered significant weekly losses again last week, with Federal Reserve chief Jerome Powell saying Friday that more "pain" is needed to bring down inflation.`,
    pubDate: `2022-08-28 11:44:01`,
    image_url: imgUrl,
    creator: [`Ed Carson`],
    category: [`business`],
  }
];

function App() {

  // State
  // Which category you clicked
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentArticles, setCurrentArticles] = useState(null);
  const shouldFetch = useRef(false);


  useEffect(() => {
    if (shouldFetch.current === true) {
      fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}`, { method: 'GET', mode: 'cors' })
        .then(response => response.json())
        .then(data => {
          const results = data.results;
          const threeArticles = [results[0], results[1], results[2]];
          setCurrentArticles(threeArticles);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [selectedCategory]);

  const changeSelectedCategory = (newCategory) => {
    setSelectedCategory(newCategory);
    shouldFetch.current = true;

  }

  return (
    <div className="App">
      <h1 className='header'>News</h1>
      <div className="container">
        <SwitchCategoryButtons categoriesList={categoriesList} clickHandler={changeSelectedCategory} />
        {selectedCategory ? <CategoryHeader category={selectedCategory} /> : null}
        {currentArticles ? currentArticles.map(article => <Article articleInfo={article} />) : null}
      </div>
    </div>
  );
}

export default App;
