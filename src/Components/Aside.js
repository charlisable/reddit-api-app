// sets Api in the fetch in Article.js, is this good code, ???
import React from "react";

function Aside({onClick}) {
    const handleClick = (e) => {
        const input = e.target.getAttribute('value');
        onClick(input);
    }

    return (
        <div className="navContainer">
           <button 
            onClick={handleClick}
            value={'https://www.reddit.com/r/home.json'} 
            >Home</button>           
            <button
            onClick={handleClick}
            value={'https://www.reddit.com/r/popular.json'} 
            >Popular</button>
        </div>
    );
}

export default Aside;