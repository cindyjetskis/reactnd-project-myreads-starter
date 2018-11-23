
import React, { Component } from "react"

export const MyContext = React.createContext();

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            none: [],
            addBook: books => {
                const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
                const wantToRead = books.filter(book => book.shelf === "wantToRead");
                const read = books.filter(book => book.shelf === "read");
                const none = books.filter(book => book.shelf === "none");
                this.setState({books, currentlyReading, wantToRead, read, none});
            },
        
            changeBook: (book, newShelf, allShelves) => {
                const newBooks = this.state.books.map(allBooks => {
                    const foundBookID = allShelves[newShelf].find(
                        bookID => bookID === allBooks.id
                    );
                    if(foundBookID) {
                        allBooks.shelf = newShelf;
                    }

                    return allBooks;

                 
                });
                this.state.addBook(newBooks);
            }

        };
    }

    render() {
        return (<MyContext.Provider value = {{...this.state}}>
        {this.props.children}
        </MyContext.Provider>
        );
    }
}
