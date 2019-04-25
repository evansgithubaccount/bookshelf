import React, { Component } from 'react';
import '../css/bookInfo.css';


const BookInformation = (props) => {
    const title = props.location.state.title;
    const author = props.location.state.author;
    const summary = props.location.state.summary;
    const image = props.location.state.image;
    return (
    <div class="body">
        <img src = {image}></img>
        <h1>{title} by {author}</h1>
        <p id="bookSum">{summary}</p>
    </div>
    )
}

export default BookInformation;