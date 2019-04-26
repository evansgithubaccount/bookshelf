import React from 'react';
import '../css/row.css';
import Books from './books';

class Bookrow extends React.Component {
    constructor(){
        super();
    }

    componentWillMount(){
        this.state = {
            books: this.props.books,
            rowID: this.props.rowID
        }
    }

    handleAdd(){
        this.props.addHandler(this.props.rowID)
    }

    deleteHandler(){
        this.props.deleteHandler()
    }

    render(){
        return (
            <div className="row">
                {
                    this.state.books.map(book => {
                    return <Books 
                    key={book.id}
                    id={book.id}
                    deleteHandler={this.deleteBook.bind(this)}
                    undoHandler={this.undoDelete.bind(this)}
                    title={book.title} author={book.author} year={book.year} genre={book.genre} image={book.image} summary={book.summary}/>
                    })
                }
                <div>
                    <button className="btn btn-success add-button" onClick={this.handleAdd.bind(this)}>Add</button>
                </div>
            </div>
        )
    }
}

export default Bookrow