//React Component for the Books. Books have a title, author, image and a shelf

import React, { Component } from "react"
import {update} from '../BooksAPI'

export default class Book extends Component {
    handleChange = async e => {
      e.persist();
        try {
            const shelf = e.target.value;
            const book = this.props;
            const result = await update(book, shelf)
            this.props.changeBook(book,shelf,result);

        } catch(error){
        
        }
    };

    render() {
      
        return (                  
         <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" 
                style={{ 
                    width: 128, 
                    height: 193,
                    //checks to see if there is an image. If there isn't an image, nothing is returned in the same width and height or the actual images of books
                     backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})`
                }}/>
            
                <div className="book-shelf-changer">
                  <select onChange={this.handleChange} value={this.props.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
            {/*checks to see if there is an author. If there isn't an anuthor found, the text No Author is returned */}
              <div className="book-authors">{this.props.authors ? this.props.authors : "No Author"}</div>
            </div>
          </li>
        );
  }
}