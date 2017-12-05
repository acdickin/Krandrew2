import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

export default class MobileNav extends Component{
	render(){
		return(
			<div className="navMenuMobile">
				<li className="nav-item">
					<NavLink to="/"  id="underline">About Us</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/wedding-info"  id="underline">Wedding Info</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/blog"  id="underline">Blog</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/get-in-touch"  id="underline">RSVP</NavLink>
				</li>
				<li className="nav-item">
					<a href="https://www.amazon.com/wedding/share/Krandrew-Registry" id="underline">Our Registry</a>
				</li>
			</div>
		)
	}
}
