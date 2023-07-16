import React, { useState } from 'react';
import "./RandomImage.css"


function RandomImage() {

    const initialUrl = "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg"

    const [url, setUrl] = useState(initialUrl);

    function generate() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setUrl(data.message)
            })
    }

    return (
        <div className="generator">
            <button type="button" className="btn btn-warning" onClick={generate}>Wylosuj psa</button>
            <img src={url} alt='wylosuj psa' />
        </div>
    );
}

export default RandomImage;