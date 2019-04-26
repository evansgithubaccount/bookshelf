import React, { Component } from 'react';
import '../css/bookshelf1.css';
import Books from './books.js';
const GoogleImages = require('google-images');
const client = new GoogleImages(' 007236372154556415134:5xdnqjoytco', 'AIzaSyDIn7MPjLVLNgOvmy2GaP6fQWCXNmaq2X8')

class Bookshelf extends Component {
    constructor() {
        super();
        this.state = {
        
            books: [
                {
                    showGenre: true,
                    cover: '',
                    title: 'Beloved',
                    author: 'Toni Morrison',
                    year: '1987',
                    genre: 'Magical Realism',
                    image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0997/9780099760115.jpg",
                    id: 1,
                    summary: 'Staring unflinchingly into the abyss of slavery, this spellbinding novel transforms history into a story as powerful as Exodus and as intimate as a lullaby. Sethe was born a slave and escaped to Ohio, but eighteen years later she is still not free. She has too many memories of Sweet Home, the beautiful farm where so many hideous things happened. Her new home is haunted by the ghost of her baby, who died nameless and whose tombstone is engraved with a single word: Beloved. Filled with bitter poetry and suspense as taut as a rope, Beloved is a towering achievement by Nobel Prize laureate Toni Morrison.'
                },
                {
                    showGenre: true,
                    cover:'',
                    title: 'Dandelion Wine',
                    author: 'Ray Bradbury',
                    year: '1957',
                    genre: 'Science Fiction',
                    image: "https://images-na.ssl-images-amazon.com/images/I/51dfAXNdszL.jpg",
                    id: 2,
                    summary: "Ray Bradbury's moving recollection of a vanished golden era remains one of his most enchanting novels. Dandelion Wine stands out in the Bradbury literary canon as the author's most deeply personal work, a semi-autobiographical recollection of a magical small-town summer in 1928. Twelve-year-old Douglas Spaulding knows Green Town, Illinois, is as vast and deep as the whole wide world that lies beyond the city limits. It is a pair of brand-new tennis shoes, the first harvest of dandelions for Grandfather's renowned intoxicant, the distant clang of the trolley's bell on a hazy afternoon. It is yesteryear and tomorrow blended into an unforgettable always. But as young Douglas is about to discover, summer can be more than the repetition of established rituals whose mystical power holds time at bay. It can be a best friend moving away, a human time machine who can transport you back to the Civil War, or a sideshow automaton able to glimpse the bittersweet future."
                },
                {
                    showGenre: true,
                    cover:'',
                    title: 'The Bell Jar',
                    author: 'Sylvia Plath',
                    year: '1963',
                    genre: 'Roman à clef',
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Belljarfirstedition.jpg/220px-Belljarfirstedition.jpg",
                    id: 3,
                    summary: "Sylvia Plath's shocking, realistic, and intensely emotional novel about a woman falling into the grip of insanity. Esther Greenwood is brilliant, beautiful, enormously talented, and successful, but slowly going under—maybe for the last time. In her acclaimed and enduring masterwork, Sylvia Plath brilliantly draws the reader into Esther's breakdown with such intensity that her insanity becomes palpably real, even rational—as accessible an experience as going to the movies. A deep penetration into the darkest and most harrowing corners of the human psyche, The Bell Jar is an extraordinary accomplishment and a haunting American classic."
                },
                {
                    showGenre: true,
                    cover:'',
                    title: 'A Game Of Thrones',
                    author: 'George RR Martin',
                    year: '1996',
                    genre: 'Fantasy',
                    image: "https://images.gr-assets.com/books/1554191954l/13496.jpg",
                    id: 4,
                    summary: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones."
                }
            ],
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

    saveBook(book){
        book.setState({
            title: book.refs.titleContent.value,
            author: book.refs.authorContent.value,
            year: book.refs.yearContent.value,
            genre: book.refs.genreContent.value,
            editMode: false
          })
    }

    render() {
        return (
            <div className='Component-Bg'>
                <div className="other">
                    <div className="shelf">
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
                                    saveBook = {this.saveBook.bind(this)}
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



export default Bookshelf;