import React, {Component} from 'react';
import '../css/bookshelf1.css';
import Books from './books.js';

class Bookshelf extends Component {
    constructor(){
        super();
    }

    render() {
       return (
        <div>
            <div className="shelf">
                <div className="row">
                    <Books title="Beloved" author="Toni Morrison" year="1987" genre="Magical Realism"/>
                    <Books title="Dandelion Wine" author="Ray Bradbury" year="1957"/>
                    <Books />
                </div>
            </div>
        </div>
       )
    }
}

export default Bookshelf;