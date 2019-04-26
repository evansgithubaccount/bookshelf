import React, { Component } from 'react';
import '../css/bookInfo.css';
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'


const BookInformation = (props) => {
    const title = props.location.state.title;
    const author = props.location.state.author;
    const summary = props.location.state.summary;
    const image = props.location.state.image
    
    return (
    <div class="body">
        <img src = {image}></img>
        <div class="hero-image">
  <div class="hero-text">
        <h1>{title} by {author}</h1>
        <p id="bookSum">{summary}</p>
        <button className="btn btn-danger" ><Link to={{pathname: '/bookshelf1' }} id="infoLink">Back</Link></button>
    </div>
    </div>
    </div>
    )
}

export default BookInformation;