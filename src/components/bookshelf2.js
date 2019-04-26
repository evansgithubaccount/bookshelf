import React, { Component } from 'react';
import '../css/bookshelf1.css';
import Books from './books.js';
const GoogleImages = require('google-images');
const client = new GoogleImages(' 007236372154556415134:5xdnqjoytco', 'AIzaSyDIn7MPjLVLNgOvmy2GaP6fQWCXNmaq2X8')

class Bookshelf2 extends Component {
    constructor(props) {
        super();
        const savedBooks = props.location.state.saveBooks
        this.state = {
            books: savedBooks,
            deletedBooks: [],
        }
    }
    addBook() {
        let newTitle = prompt('Enter Book Title');
        let newAuthor = prompt('Enter the name of the author');
        let newYear = prompt('Enter Year that the book was published');
        let newGenre = prompt('Enter Book Genre');
        this.state.books.push({
            title: newTitle,
            author: newAuthor,
            year: newYear,
            genre: newGenre,
            id: Date.now(),
            summary: "I don't know what this book is about, but it's probably incredible." 
        })

        this.setState({
            books: this.state.books
        })
    }

    deleteBook(id) {
        let newBookArr = this.state.books;
        newBookArr.map((book, index) => {
          if (id === book.id) {
            this.setState({deletedBooks:[index, newBookArr[index]]})
            newBookArr.splice(index, 1);
          }
        });
        this.setState({
          books: newBookArr,
          deleted: true
        });
    }

    undoDelete(){
        let deletedArray = this.state.deletedBooks
        let newAdd = deletedArray.pop();
        let index = deletedArray.shift();
        let bookArray = this.state.books;
        bookArray.splice(index,0,newAdd);
        this.setState({
            books: bookArray,
            deleted: false
        })
    }

    render() {
        return (
            <div className='Component-Bg'>
                <div className="other">
                    <div className="shelf">
                     <select name="genre">
                        <option value="ALL">All</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Poetry">Poetry</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Historical">Historical Drama</option>
                        <option value="OTHER">Other</option>
                    </select>
                    <button type="button" className="sortButton">Sort</button>
                    <button className={`btn btn-info sticky-top ${this.state.deleted ? 'show-undo':'undo-button'}`} onClick={this.undoDelete.bind(this)}>Undo</button>
                        <div className="row">
                            {
                                this.state.books.map(book => {
                                    return <Books 
                                    key={book.id}
                                    id={book.id}
                                    bookArray = {this.state.books}
                                    deleteHandler={this.deleteBook.bind(this)}
                                    undoHandler={this.undoDelete.bind(this)}
                                    title={book.title} author={book.author} year={book.year} genre={book.genre} image={book.image} summary={book.summary}/>
                                })
                            }

                        </div>
                    </div>
                    <div>
                        <button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }



}



export default Bookshelf2;