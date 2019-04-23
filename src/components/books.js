
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
    let titleElement, authorElement, yearElement, genreElement, buttonArea;
    if (this.state.editMode) {
      titleElement = (
        <h5><textarea
          ref="titleContent"
          className="title-textarea"
          defaultValue={this.props.title}
        /></h5>
      );
      authorElement = (
        <textarea
          ref="authorContent"
          className="author-textarea"
          defaultValue={this.props.author}
        />
      );
      yearElement = (
        <textarea
          ref="yearContent"
          className="year-textarea"
          defaultValue={this.props.year}
        />
      );
      genreElement = (
        <textarea
          ref="genreContent"
          className="genre-textarea"
          defaultValue={this.props.genre}
        />
      );
      buttonArea = (
        <div>
          <button className="btn btn-info" onClick={this.handleSave.bind(this)}>Save</button>
        </div>
      );
    } else {
      titleElement = <h5>{this.props.title}</h5>;
      authorElement = <span>{this.props.author}</span>;
      yearElement = <span>{this.props.year}</span>;
      genreElement = <span>{this.props.genre}</span>;
      buttonArea = (
        <div>
          <button className="btn btn-warning" onClick={this.handleEdit.bind(this)}>Edit</button>
          <button className="btn btn-success read-button">Read</button>
        </div>
      );
    }
        return(
            <div className="col-sm-auto">
                <div className="card card-view">
                    <div className="card-body dark">

                        <img id = "images" src=" https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt = " " />
                        {titleElement}
                        Written By: {authorElement}
                        <br></br>Published In: {yearElement}
                        <br></br>Genre: {genreElement}<br></br>   
                        {buttonArea}
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