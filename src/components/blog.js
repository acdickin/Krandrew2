import React, { Component } from 'react';
import BlogImg from './blog_img';
import IMGS from '../api/imageList';


export default class Blog extends Component {
  render() {
    return (
    	<div className="flex-container">
      	<div className="title-blk">
      		<h2 className="title" >Blog Page</h2>
          <div className="main">



            <h4>Spring 2017</h4>
            <BlogImg images={IMGS.spring2017}/>

            <h4>Ohanapecosh</h4>
            <BlogImg images={IMGS.ohana}/>

            <h4>WellSpring Spa Visit</h4>
            <BlogImg images={IMGS.wellspring}/>
          </div>
        </div>
      </div>

    );
  }
}
