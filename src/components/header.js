import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import MobileNav from './mobileNav';


export default class Header extends Component{
	constructor(){
		super();
		this.state={
			visible:false
		}

		this.toggleMenu=this.toggleMenu.bind(this);
	}

	toggleMenu(){
		this.setState({visible: !this.state.visible})
	}
	render(){
		return(
			<nav className="nav-bar">


			<div className="header">
				<h1>Andrew and Krystaals Wedding</h1>
			</div>
				<div className="nav-items">
					<div className="menu-btn">
						<img id="mobileMenu" className={this.state.visible ? 'active': '' } src={require("../img/menu.png")} alt="menu" onClick={this.toggleMenu}/>
							{
								this.state.visible
								?<MobileNav/>
								:null
							}
					</div>
					<div className="navMenu" >
						<li className="nav-divider">
							-
						</li>
						<li className="nav-item">
							<NavLink to="/"  id="underline">About Us</NavLink>
						</li>
							<li className="nav-divider">
								-
							</li>
						<li className="nav-item">
							<NavLink to="/wedding-info"  id="underline">Wedding Info</NavLink>
						</li>
						<li className="nav-divider">
								-
						</li>
						<li className="nav-item">
							<NavLink to="/blog"  id="underline">Blog</NavLink>
						</li>
						<li className="nav-divider">
								-
							</li>
						<li className="nav-item">
							<NavLink to="/get-in-touch"  id="underline">RSVP</NavLink>
						</li>
						<li className="nav-divider">
								-
						</li>
						<li className	="nav-item">
							<a href="https://www.myregistry.com/wedding-registry/Krystaal-McClain-and-Andrew-Dickinson-Seattle-WA/1394917" id="underline">Our Registry</a>
						</li>
						<li className="nav-divider">
							-
						</li>
				  </div>
				</div>
			</nav>

		)
	}
}
