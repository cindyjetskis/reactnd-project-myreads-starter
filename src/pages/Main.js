//React Component for the Main Page

import React, { Component } from "react"
import AddButton from '../components/AddButton'
import Shelf from '../components/Shelf'
import {getAll} from '../BooksAPI'
import Header from '../components/Header'


export default class Main extends Component {
    async componentDidMount (){
        try {
            const books = await getAll();
            this.props.addBook(books);

        } catch (error) {
        }
    }
    render() {
        return (   
            <div className="list-books">
            <Header />
            <div className="list-books-content">
           
             <Shelf title="Currently Reading Shelf" books ={this.props.currentlyReading} changeBook={this.props.changeBook}/>
             <Shelf title="Want To Read Shelf" books ={this.props.wantToRead} changeBook={this.props.changeBook} />
             <Shelf title="Already Read Shelf" books ={this.props.read} changeBook={this.props.changeBook} />

            </div>
           <AddButton/>
          </div>               
          )
    }
}