// Look at newsdata.io docs to see how response objects look like
// the purpose of this file is to have an array of a bunch of mock data/articles so that the api credits don't get wasted
import imgUrl from './src/dowjones.jpeg';
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

export default results;