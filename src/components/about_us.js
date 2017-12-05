import React, { Component } from 'react';
import ThisCarousel from './carousel';
import IMGS from '../api/imageList';

export default class AboutUs extends Component {
  render() {
    
    return (
      <div>
      	<div className="title-blk">
          <h2 className="title" > About Us</h2>
      		<ThisCarousel images={IMGS.about}/>
      	</div>
        <div className="main about-text">
          <br/>
          <p>     We’re millenials, so, of course, we met on Tinder, and it didn’t take long for Krystaal to plan a date. Our first date included three of our favorite things: hiking, pizza, and lots of laughter. From the start, we got along so easily, and loudly, feeling nearly immediate comfort with one another. Something to do with Andrew’s kind heartedness and Krystaal’s bossily caring nature. We knew very early on that we would be together for a long time.</p>

          <p>     These days, we happily spend time snuggling on the couch with our cat Patapon, going hiking and camping, and cooking gluten-free, vegetarian meals together. This Washingtonian and Michigander match is one of noisy, adventurous, understanding love.</p>
        </div>

      </div>
    );
  }
}
