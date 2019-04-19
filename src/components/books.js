import React, {Component} from 'react'
import Bookshelf from './bookshelf1'
import propTypes from 'prop-types'
import '../css/books.css'
class Books extends Component {
    constructor () {
        super()
    }
    render() {
        return(
            <div>
                <div className="div-Books">
                    <div className="row">
                        <Note title="Red is great" author="Pi Rules" year="2008" genre="Horror Fiction"></Note> 
                        <Note title="If I won the Lottery" author="Stingy MoFo" year="2019" genre="Fiction"></Note>
                        <Note title="Macs over PC" author="Sorry Billy G." year="2019" genre="Memoir"></Note>               
                    </div>
                </div>
            </div>
        )
    }
}
Note.defaultProps = {
    title: 'Title',
    author: 'Author',
    year: 'Year',
    genre: 'Genre'
}
Note.propTypes = {
    title: propTypes.string,
    genre: propTypes.string,
    year: propTypes.string,
    genre: propTypes.string
}
export default Books