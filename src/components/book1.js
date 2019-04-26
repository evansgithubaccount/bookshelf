import React from 'react'
import propTypes from 'prop-types'
import Bookshelf from './bookshelf1.js'

class BookOne extends Component {
    constructor(){
        super();
    }
    componentWillMount() {
        this.state = {
            title: this.props.title,
            author: this.props.author,
            year: this.props.year,
            genre: this.props.genre,
            image: this.props.image,
            id: this.props.id
        }
    }
}

const Beloved = () => 
    <div>
        
    </div>

export default BookOne