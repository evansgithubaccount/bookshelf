import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BookInformation from './bookInfo';
import Bookshelf from './bookshelf1';

class Home extends React.Component{
    render(){
      return (
        <BrowserRouter>
            <Switch>
                <Route path="/bookInfo" component={BookInformation}/>
                <Route component={Bookshelf} />
            </Switch>
        </BrowserRouter>
      )
    }
  }

  export default Home;