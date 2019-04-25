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
                    cover:'',
                    title: 'Chocolat',
                    author: 'Joanne Harris',
                    year: '1999',
                    genre: 'Fiction',
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/JoanneHarris_Chocolat.jpg/220px-JoanneHarris_Chocolat.jpg",
                    id: 3,
                    summary: "The story takes place in a small town named Lansquenet-sous-Tannes. It is told by the two protagonists: Vianne Rocke and Francis Reynaud. The first one is a woman who stopped in the town with her daughter Anouk. They travel all around the world, not staying anywhere for a long time. The second protagonist is a cure in the local cathedral. Vianne, having come to the town at the Lent, starts to set up a chocolate café there. This, and the fact that she doesn’t go to the church, brings on the hostility of the fanatically devotional cure. But the woman doesn’t pay attention to him. She has in mind to stay here for as much time, as she wants. The cure is angry. He isn’t used to that fact that somebody may contradict him. So, preaching at the church, he indoctrinates the citizens against Vianne. So, at first the woman doesn’t have clients at her shop. But the people are attracted to the unsurpassed fragrance wafting from the shop, and in some time, they start coming to the shop to drink some hot chocolate or eat dainty chocolate sweet. Vianne is a friendly, kind and sincere woman, so she finds a lot of friends among the citizens. She knows them: their problems, secrets, their characters."
                },
                {
                    cover:'',
                    title: 'A Feast For Crows',
                    author: 'George RR Martin',
                    year: '2005',
                    genre: 'Fantasy',
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/AFeastForCrows.jpg/220px-AFeastForCrows.jpg",
                    id: 4,
                    summary: "Bloodthirsty, treacherous and cunning, the Lannisters are in power on the Iron Throne in the name of the boy-king Tommen. The war in the Seven Kingdoms has burned itself out, but in its bitter aftermath new conflicts spark to life. The Martells of Dorne and the Starks of Winterfell seek vengeance for their dead. Euron Crow's Eye, as black a pirate as ever raised a sail, returns from the smoking ruins of Valyria to claim the Iron Isles. From the icy north, where Others threaten the Wall, apprentice Maester Samwell Tarly brings a mysterious babe in arms to the Citadel. Against a backdrop of incest and fratricide, alchemy and murder, victory will go to the men and women possessed of the coldest steel and the coldest hearts"
                }
            ]
        }
    }
    addBook() {
        this.state.books.push({
            title: prompt('Enter Book Title'),
            author: prompt('Enter the name of the author'),
            year: prompt('Enter Year that the book was published'),
            genre: prompt('Enter Book Genre'),
            id: Date.now(),
            summary: "I don't know what this book is about, but it's probably incredible. I mean just look at that title, you just know a book with that title has got to be amazing."
        })

        this.setState({
            books: this.state.books
        })
    }

    deleteBook(id) {
        let newBookArr = this.state.books;
        newBookArr.map((book, index) => {
          if (id === book.id) {
            let deletedBooks = []
            deletedBooks.push(newBookArr[index]);
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