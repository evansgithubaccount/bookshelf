import React, {Component} from 'react';
<<<<<<< HEAD
import '../css/bookshelf1.css'
import Books from './books'
=======
import '../css/bookshelf1.css';
//import Books from './books.js';
>>>>>>> 59ae569ea68008f506d772c06f62104d4f7d74e5

class Bookshelf extends Component {
    constructor(){
        super();
    }

    render() {
       return (
        <div>
            <div className="shelf">
                <div className="row">
                    <Books />
                    <Books />
                    <Books />
                </div>
            </div>
        </div>
       )
    }
}

export default Bookshelf;