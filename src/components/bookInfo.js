import React, { Component } from 'react';
import '../css/bookInfo.css';

let imgUrl = "http://lloydbleekcollection.cs.uct.ac.za/images/bleek_nb_lowres/BC_151_A1_4_014/A1_4_14_01339.JPG";


const BookInformation = (props) => {
    const title = props.location.state.title;
    const author = props.location.state.author;
    const summary = props.location.state.summary;
    const image = props.location.state.image;
   
    return (
        
    <div>
        <img className ='infopic'src = {image}></img>
        <h1 className = 'ta'>{title} by {author}</h1>
        <div className='Summary'
                // style={{
                //     backgroundImage: 'url(' + imgUrl + ')',
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center center',
                //     backgroundRepeat: 'no-repeat',
                // }}
            >
                <p>{summary}</p>
            
    </div>
   </div>
    );
}


export default BookInformation;