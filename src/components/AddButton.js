//React Component for the Search Button

import React, { Component } from "react"
import {Link} from "react-router-dom"

export default class AddButton extends Component {
    render() {
        return (                  
            <div className="open-search">
            <Link to={"/search"}>
            Add a new book
            </Link>
          </div>
          );
    }
}