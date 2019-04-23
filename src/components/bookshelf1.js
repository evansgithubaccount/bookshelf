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
                    genre: 'Magical Realism',
                    image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0997/9780099760115.jpg"
                },
                {
                    cover:'',
                    title: 'Dandelion Wine',
                    author: 'Ray Bradbury',
                    year: '1957',
                    genre: 'Science Fiction',
                    image: "https://images-na.ssl-images-amazon.com/images/I/51dfAXNdszL.jpg"
                },
                {
                    cover:'',
                    title: 'Chocolat',
                    author: 'Joanne Harris',
                    year: '1999',
                    genre: 'Fiction',
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/JoanneHarris_Chocolat.jpg/220px-JoanneHarris_Chocolat.jpg"
                }
            ]
        }
    }

    render() {
       return (
        <div class="other">
            <div className="shelf">
                <div className="row">
                    {
                        this.state.books.map(function(book) {
                            return <Books title={book.title} author={book.author} year={book.year} genre={book.genre} image={book.image}/>
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
            title: prompt('Enter Book Title'),
            author: prompt('Enter the name of the author'),
            year: prompt('Enter Year that the book was published'),
            genre: prompt('Enter Book Genre')
        });
        this.setState({
            books: this.state.books
        })
    }
}

export default Bookshelf;