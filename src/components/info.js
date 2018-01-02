import React, { Component } from 'react';
import GoogleMap from './google_map';

const warm =require('../img/WarmSprings.png');
const leavenworth =require('../img/Leavenworth.jpg')
const comfort = require('../img/comfortinn.jpg')

export default class Info extends Component {
  render() {
    return (
      <div className="flex-container">
      	<div className="title-blk blk">
      		<h2 className="title">Wedding Info</h2>
          <div className="main">
            <p><strong>Disconnect with us on our destination weekend wedding extravaganza.</strong> We intend to spend the weekend in the forest with all of you, from a welcome dinner Friday night to a send-off brunch on Sunday.</p>
            <h3>Location</h3>
            
            <p>
              Warm Springs Inn and Winery is located between the mountain towns of Leavenworth and Wenatchee. The area surrounding Warm Springs Inn is full of wineries and opportunities for outdoor recreation. We encourage taking the time to play tourist.
            </p>
             <img className="locImg" src={warm} alt= "Warm Springs Inn and Winery"/>
            <a href="https://warmspringsinn.com/"><p className="link">Warm Spring Inn and Winery Website</p></a>
            <p>1611 Love Lane</p>
            <p>Wenachee, WA 98801</p>

            <div className='map'>
              <GoogleMap/>
            </div>

            <h2>  Accommodations</h2>
            <p>Warm Springs Inn and Winery is located between the mountain towns of Leavenworth and Wenatchee. The area surrounding Warm Springs Inn is full of wineries and opportunities for outdoor recreation. We encourage taking the time to play tourist. </p>

            <p>Wenatchee has the closest lodging options, a riverfront public market and walkable main street. We have blocked rooms at Comfort Suites, just mention that you’re attending a wedding at Warm Springs Inn and Winery.</p>
            <img className="locImg" src={comfort} alt= "Comfort Inn Wanatchee"/>
            <p>195 East Penny Road, Wenatchee, WA 98801</p>

            <p>For a true destination experience, we highly recommend staying in <a href='https://goo.gl/maps/HAB3aLENjoK2'>Leavenworth</a>, 18 miles away.  Leavenworth is a Bavarian-styled village in the Cascade Mountains, with ample shopping, hotels, and German eateries.</p>
           <img className="locImg" src={leavenworth} alt= "Leavenworth"/>
            <p>Check out < a href="http://leavenworth.org/lodging/" alt="Leavenworth Lodging">Leavenworth Lodging</a> or <a href="https://www.airbnb.com/a/Leavenworth--United-States?af=43720035&c=A_TC%3Daf8p3c5ysp%26G_MT%3De%26G_CR%3D236769216860%26G_N%3Dg%26G_K%3Dairbnb%20leavenworth%20washington%26G_P%3D%26G_D%3Dc%26$pi:0.pk:41645805105_236769216860_c_330028824434&gclid=CjwKCAiA-KzSBRAnEiwAkmQ155riPyfT1ffozHIiESv5lia67ngIlb7CEBQbwxJj1hryv3dY4Z3vnhoCCDsQAvD_BwE" alt="AirBNB Leavenworth">AirBNB</a> for Leavenworth lodging options</p>


            <h2> Transportation</h2>
            <p>It’ll take around three hours to get from Seattle to Wenatchee. <a href ="https://goo.gl/maps/AMpjwFcvmyp">Map</a></p>

            <h4>Planes</h4>
            
            <h3>Seattle-Tacoma International Airport</h3>
            <p>17801 International Boulevard, Seattle, WA 98158, United States</p>
            <br/>
            <h3>Pangborn Memorial Airport</h3>
            <p>1 Pangborn Drive, East Wenatchee, WA 98802, United States</p>
            <p>There is a SMALL airport in Wenatchee, WA. This is a great option for convenience, but will be a bit pricier, and involves traveling on a teeny-tiny plane.</p>
<br/>
            <h4>Trains</h4>
            <p>Ride the Empire Builder, a daily Amtrak train leaves downtown Seattle at 4:40 PM and arrives in Wenatchee at 8:30 PM. <a href="https://www.amtrak.com/services/contentService.iblegacy.routes.empire-builder.html" alt="Amtrak Link">Amtrak</a></p>

            <p>You can catch the LINK light rail to the train station (International District/Chinatown stop) from SeaTac or downtown Seattle.  <a href="https://www.soundtransit.org/Schedules/Link-light-rail" alt="Link Light Rail">Link Light Rail</a></p>

            <h3>Automobiles</h3>
            <p>Seattle is a little less than 3 hours away from Wenatchee by car.</p>

            <p>There are four shuttle buses through Wenatchee Valley Shuttle that run from SeaTac to Wenatchee in three hours. They leave the airport daily at 10:00 AM, 1:00 PM, 4:00 PM, and 7:00 PM.  <a href="https://www.wenatcheevalleyshuttle.com/schedules" alt="Wenatchee Shuttle">Wenatchee Shuttle</a></p>

            <p>A four hour Greyhound bus leaves from downtown Seattle daily at 9:00 AM  <a href="http://locations.greyhound.com/bus-routes/destination/seattle-wa/wenatchee-wa#fare-search" alt="Greyhound">Greyhound</a></p>
        	</div>
        </div>
      </div>
    );
  }
}
