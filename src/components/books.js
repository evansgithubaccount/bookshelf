
import React, {Component} from 'react';
import Bookshelf from './bookshelf1.js';
import propTypes from 'prop-types';
import '../css/books.css';


class Books extends Component {
    constructor () {
        super()
    }
    componentWillMount() {
        this.state = {
            title: this.props.title,
            author: this.props.author,
            year: this.props.year,
            genre: this.props.genre,
            editMode: false
        }
    }

    handleEdit(){
        this.setState({
            editMode: true
        })
    }

    handleSave(){
        this.setState({
            title: this.refs.titleContent.value,
            author: this.refs.authorContent.value,
            year: this.refs.yearContent.value,
            genre: this.refs.genreContent.value,
            editMode: false
        })
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
                        <button className="btn btn-danger remove-button">Remove</button>
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