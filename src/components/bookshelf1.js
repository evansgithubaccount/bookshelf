import React, {Component} from 'react';
import '../css/bookshelf1.css';
import Books from './books.js';

class Bookshelf extends Component {
    constructor(){
        super();
        this.state = {
            books: [
                {
                    cover: '',
                    title: 'Beloved',
                    author: 'Toni Morrison',
                    year: '1987',
                    genre: 'Magical Realism'
                },
                {
                    cover:'',
                    title: 'Dandelion Wine',
                    author: 'Ray Bradbury',
                    year: '1957',
                    genre: 'Science Fiction'
                },
                {
                    cover:'',
                    title: 'Chocolat',
                    author: 'Joanne Harris',
                    year: '1999',
                    genre: 'Fiction'
                }
            ]
        }
    }

    render() {
       return (
        <div>
            <div className="shelf">
                <div className="row">
                    {
                        this.state.books.map(book => {
                            return <Books title={book.title} author={book.author} year={book.year} genre={book.genre}/>
                        })
                    }
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button>
            </div>
        </div>
       )
    }
    addBook() {
        this.state.books.push({
            title: 'New Book Title',
            author: 'New Bood Author',
            year: 'New Book Year',
            genre: 'New Book Genre'
        });
        this.setState({
            books: this.state.books
        })
    }
}

export default Bookshelf;