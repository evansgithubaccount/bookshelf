
import React, {Component} from 'react';
import Bookshelf from './bookshelf1.js';
import propTypes from 'prop-types';
import '../css/books.css';


class Books extends Component {
    constructor () {
        super()
    }
    render() {
        return(

            <div className="col-sm-auto">
                <div className="card card-view">
                    <div className="card-body dark">
                    <img id = "images" src=" https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt = " " />
                        <h5 Note title="">
                            {this.props.title}
                        </h5>
                        <p>
                            Written by: {this.props.author}
                            <br></br>Released: {this.props.year}
                            <br></br>Genre: {this.props.genre}
                        </p>
                        <button className="btn btn-success edit-button">Read</button>
                        </div>
                    </div>
                </div>

        )
    }
}
Books.defaultProps = {
    title: 'Title',
    author: 'Author',
    year: 'Year',
    genre: 'Genre',
    cover: ''
}
Books.propTypes = {
    title: propTypes.string,
    author: propTypes.string,
    year: propTypes.string,
    genre: propTypes.string,
    cover: propTypes.string
}
export default Books