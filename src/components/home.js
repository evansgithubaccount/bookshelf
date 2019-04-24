import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import info from './bookInfo';
import Bookshelf from './bookshelf1';

class Home extends React.Component{
    render(){
      return (
        <BrowserRouter>
            <Switch>
                <Route path="/bookInfo" component={info}/>
                <Route component={Bookshelf} />
            </Switch>
        </BrowserRouter>
      )
    }
  }

  export default Home;