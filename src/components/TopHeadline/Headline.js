import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Headline = () => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{        
        const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-28&sortBy=publishedAt&apiKey=8a94a2256de24724931e9ea078d3fd5f"
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headline: {articles.length}</h1>
            {
                articles.map(article => <News article={article} author={article.author}></News>)
            }
            
        </div>
    );
};

export default Headline;