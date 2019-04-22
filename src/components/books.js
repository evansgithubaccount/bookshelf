
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

            <div className="col-sm-2">
                <div className="card card-view">
                    <div className="card-body dark">
                        <h5 Note title="">
                            {this.props.title}
                        </h5>
                        <p>
                            Written by: {this.props.author}
                            Release: {this.props.year}
                            Genre: {this.props.genre}
                        </p>
                        <button className="btn btn-success edit-button">Read</button>

            <div>
                <div className="div-Books">
                    <div className="row">
                        <Note title="Red is great" author="Pi Rules" year="2008" genre="Horror Fiction"></Note> 
                        <Note title="If I won the Lottery" author="Stingy MoFo" year="2019" genre="Fiction"></Note>
                        <Note title="Macs over PC" author="Sorry Billy G." year="2019" genre="Memoir"></Note>               

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