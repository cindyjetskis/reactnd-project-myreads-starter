//Main APP

import React from 'react'
import {Switch, Route} from "react-router-dom"
// import * as BooksAPI from './BooksAPI'
import Main from './pages/Main'
import Search from './pages/Search'
import './App.css'
import Provider, {MyContext} from './Provider'


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      <Provider>
     
        <Switch>
          <Route exact path={"/"} render ={() => (
          <MyContext.Consumer>
             {context => <Main {...context}/>}
             </MyContext.Consumer>
          )}
          />
          <Route exact path={"/search"} render ={() => (
          <MyContext.Consumer>
             {context => <Search {...context}/>}
             </MyContext.Consumer>
          )}
          />
        </Switch>
       
        </Provider>
      </div>
    );
  }
}

export default BooksApp