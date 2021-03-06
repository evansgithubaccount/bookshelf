
import React, { Component } from 'react';
import Bookshelf from './bookshelf1.js';
import propTypes from 'prop-types';
import '../css/books.css';
import {Link} from 'react-router-dom';


class Books extends Component {
  constructor() {
    super();
    this.onPressButton = this.onPressButton.bind(this);
  }
    componentWillMount() {
        this.state = {
            title: this.props.title,
            author: this.props.author,
            year: this.props.year,
            genre: this.props.genre,
            image: this.props.image,
            summary: this.props.summary,
            bookArray: this.props.bookArray,
            editMode: false,
            textValue: 'This book is unread.'
        }
    }
    onPressButton() {
        this.setState({
            textValue: 'Book has been read!!!'
        })
    }
  componentWillMount() {
    this.state = {
        title: this.props.title,
        author: this.props.author,
        year: this.props.year,
        genre: this.props.genre,
        image: this.props.image,
        summary: this.props.summary,
        editMode: false
    };
  }
  onPressButton() {
    this.setState({
      textValue: 'Book has been read!!!'
    })
  }
  handleEdit() {
    this.setState({
      editMode: true
    });
  }
 
  handleRead() {
    this.setState({
      editMode: true
    });
  }
  
  handleSave() {
    this.props.saveBook(this)
  }
  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

  handleUndo() {
    this.props.undoHandler();
  }

  render() {
    let titleElement, authorElement, yearElement, genreElement, buttonArea;
    let imageURL = `${this.props.image}`
    if (this.state.editMode) {
      titleElement = (
        <h5><textarea
          ref="titleContent"

          className="title-textarea"
          defaultValue={this.state.title}
        /></h5>
      );
      authorElement = (
        <textarea
          ref="authorContent"
          className="author-textarea"
          defaultValue={this.state.author}
        />
      );
      yearElement = (
        <textarea
          ref="yearContent"
          className="year-textarea"
          defaultValue={this.state.year}
        />
      );
      genreElement = (
        <textarea
          ref="genreContent"
          className="genre-textarea"
          defaultValue={this.state.genre}
        />
      );
      buttonArea = (
        <div>
          <button className="btn btn-info" onClick={this.handleSave.bind(this)}>Save</button>
          
        </div>
      );
    } else {
      titleElement = <h5>{this.state.title}</h5>;
      authorElement = <span>{this.state.author}</span>;
      yearElement = <span>{this.state.year}</span>;
      genreElement = <span>{this.state.genre}</span>;
      buttonArea = (
        <div>
          <button className="btn btn-warning" onClick={this.handleEdit.bind(this)}>Edit</button>
          <button className="btn btn-success read-button" onClick={this.onPressButton.bind(this)}><Link to={{pathname: '/bookInfo', state:{title: this.state.title, author:this.state.author, summary:this.state.summary, image:this.state.image, bookArray:this.state.bookArray} }} id="infoLink" >Read</Link></button>
          <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
          <p>{this.state.textValue}</p>

        </div>
        
      );
    }

    return (
      <div className={`col-sm-auto`}>
        <div className="card card-view">
          <div className="card-body dark">
            <img id="images" src={imageURL}   style={{justifyContent: 'center',alignItems: 'center',}} alt="" />
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
  cover: '',
  image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
}
Books.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  year: propTypes.string,
  genre: propTypes.string,
  cover: propTypes.string,
  image: propTypes.string
}
export default Books