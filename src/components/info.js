import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class Info extends Component {
  render() {
    return (
      <div className="flex-container">
      	<div className="title-blk blk">
      		<h2 className="title">Wedding Info</h2>
          <div className="main">
            <p><strong>Disconnect with us on our destination weekend wedding extravaganza.</strong> We intend to spend the weekend in the forest with all of you, from a welcome dinner Friday night to a send-off brunch on Sunday.</p>
            <h4>Location</h4>
            <br/>
            <p>
              Warm Springs Inn and Winery is located between the mountain towns of Leavenworth and Wenatchee. The area surrounding Warm Springs Inn is full of wineries and opportunities for outdoor recreation. We encourage taking the time to play tourist.
            </p>

            <a href="https://warmspringsinn.com/"><p className="link">Warm Spring Inn and Winery Website</p></a>
            <p>1611 Love Lane</p>
            <p>Wenachee, WA 98801</p>

            <div className='map'>
              <GoogleMap/>
            </div>

            <p>Wenatchee has the closest options, a riverfront public market and walkable main street. We have blocked rooms at Comfort Suites.</p>
            <p>For a true destination experience, we highly recommend staying in Leavenworth, 18 miles away. Leavenworth is a Bavarian-styled village in the Cascade Mountains, with ample shopping, hotels, and German eateries.</p>
            <p>Transportation options coming soon. Please check back for updates!</p>


        	</div>
        </div>
      </div>
    );
  }
}
