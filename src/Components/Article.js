import React, {useEffect, useState} from "react";
import '../styles/card.css';
import Aside from "./Aside";

export default function Article() {
    const [articles, setArticles] = useState([]);
    const [api, setApi] = useState('https://www.reddit.com/r/home.json');


    const home = async () => {
        try {
            // change fetch() with a button on Aside component
            let response = await fetch(api);
            if (!response.ok) {
                throw new Error(`HTTP error. Status: ${response.status}`);
            }        
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Error fetching data: ", error);
        }

    };
    
    useEffect(() => {
        home().then(data => {
            if (data && data.data && data.data.children.length > 0) {
                const fetchedArticles = data.data.children.map(child => ({
                    title: child.data.title,
                    author: child.data.author,
                    created: (new Date(child.data.created * 1000)).toLocaleString(),
                    comments: child.data.permalink,
                    
                }));
                setArticles(fetchedArticles);
            }         
        });
    }, [api]);

    return (
        <div>
            <Aside onClick={setApi} /> 
            {articles.map((article, index) => (
                <div className="card" key={index}>
                    <h2>{`Title: ${article.title}`}</h2>
                    <p>{`Author ${article.author}`}</p>
                    <p>{`created ${article.created}`}</p>
                    <div>
                        <p>Comments</p>
                        <a href={`https://www.reddit.com${article.permalink}`} target="_blank" rel="noopener noreferrer">
                            View Comments
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )

}