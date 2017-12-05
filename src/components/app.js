import React, { Component } from 'react';
import Header from './header'

import AboutUs from './about_us.js';
import Blog from './blog.js';
import GetInTouch from './get_in_touch.js';
import Info from './info.js';

import { Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
      	 		<Route exact path="/" component={AboutUs}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/wedding-info" component={Info}/>
            <Route exact path="/get-in-touch" component={GetInTouch}/>
            
      </div>
    );
  }
}
