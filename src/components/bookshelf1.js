import React, { Component } from 'react';
import '../css/bookshelf1.css';
import Books from './books.js';
import {BrowserRouter, Route} from 'react-router-dom';
import BookInformation from './bookInfo';

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
                    id: 1,
                    summary: "The novel is based on the true story of a black slave woman, Margaret Garner, who in 1865 escaped from a Kentucky plantation with her husband, Robert and their children. The sough refuge in Ohio, but their owner and law officers soon caught up with the family. Before their recapture, Margaret killed her young daughter to prevent her return to slavery. In the novel, Sethe is also passionately devoted mother who flees with her children from an abusive owner known as 'schoolteacher'. They are caugh and in a act of supremt love and sacrifice, she too tries to kill her children to keep them from slvery. Only her two-year-old daughter dies, and the schoolteacher, believing that Sethe is crazy, decides not to take her back. Sethe later has 'Beloved' inscribed on her daughter's tombstone. Although she had intended for it to read 'Dearly Beloved,' she did not have the energy to 'pay' for two words(each word cost her 10 minutes of sex witht he engraver). "
                },
                {
                    cover:'',
                    title: 'Dandelion Wine',
                    author: 'Ray Bradbury',
                    year: '1957',
                    genre: 'Science Fiction',
                    image: "https://images-na.ssl-images-amazon.com/images/I/51dfAXNdszL.jpg",
                    id: 2,
                    summary: "Douglas Spaulding is a twelve-year-old boy living in Green Town, Illinois. The summer starts with Douglas coming to the realization that he is alive, and he rejoices in the beauty of everything around him. The dandelion wine that he makes with his ten year old brother Tom and his grandfather represents that beauty. At the end of June, July, and August, they press one small bottle for each day of the summer. Douglas is ready to enjoy the magical life of summer, but something is missing. He needs new sneakers. Douglas does not need new sneakers because he wants to look good or because last years pair is out of style. He needs new sneakers because the Royal Crown Cream-Sponge Para Litefoot Tennis Shoes have the magic that he needs to run like the wind and bound through the world. Douglas tells Mr. Sanderson, the shoe salesman, the importance of the sneakers to him and his passion is so great that the old man is transported briefly back to his own childhood, when he wanted to run like gazelles and antelopes. The man is so thrilled by Douglas's speech that he gives him a list of errands to run in exchange for the new shoes. Douglas is now ready to run through the town and its ravine, the gateway to the wilderness, with his pals Charlie Woodman and John Huff. "
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