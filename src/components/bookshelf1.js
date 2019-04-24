import React, { Component } from 'react';
import '../css/bookshelf1.css';
import Books from './books.js';

let imgUrl = 'https://cdn.wallpapersafari.com/14/1/qgcwDR.png';

 
class Bookshelf extends Component {
    constructor() {
        super();
        this.state = {
            books: [
                {
                    cover: '',
                    title: 'Beloved',
                    author: 'Toni Morrison',
                    year: '1987',
                    genre: 'Magical Realism',
                    image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0997/9780099760115.jpg",
                    id: 1
                },
                {
                    cover:'',
                    title: 'Dandelion Wine',
                    author: 'Ray Bradbury',
                    year: '1957',
                    genre: 'Science Fiction',
                    image: "https://images-na.ssl-images-amazon.com/images/I/51dfAXNdszL.jpg",
                    id: 2
                },
                {
                    cover:'',
                    title: 'Chocolat',
                    author: 'Joanne Harris',
                    year: '1999',
                    genre: 'Fiction',
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/JoanneHarris_Chocolat.jpg/220px-JoanneHarris_Chocolat.jpg",
                    id: 3
                }
            ]
        };
    }

    addBook() {
        this.state.books.push({
            title: prompt('Enter Book Title'),
            author: prompt('Enter the name of the author'),
            year: prompt('Enter Year that the book was published'),
            genre: prompt('Enter Book Genre'),
            id: Date.now(),
        })
        this.setState({
            books: this.state.books
        })
    }
    deleteBook(id) {
        let newBookArr = this.state.books;
        newBookArr.map((book, index) => {
          if (id === book.id) {
            newBookArr.splice(index, 1);
          }
        });
        this.setState({
          books: newBookArr
        });
    }


    render() {
        return (

            <div className='Component-Bg'
                style={{
                    backgroundImage: 'url(' + imgUrl + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="other">
                    <div className="shelf">
                        <div className="row">
                            {
                                this.state.books.map(book => {
                                    return <Books 
                                    key={book.id}
                                    id={book.id}
                                    deleteHandler={this.deleteBook.bind(this)}
                                    title={book.title} author={book.author} year={book.year} genre={book.genre} image={book.image} />
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



export default Bookshelf;