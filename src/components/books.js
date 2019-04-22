
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
    genre: 'Genre'
}
Books.propTypes = {
    title: propTypes.string,
    author: propTypes.string,
    year: propTypes.string,
    genre: propTypes.string
}
export default Books