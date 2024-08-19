import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component{
	render(){
		return(<header>
			<div className="open-container">

			{/*för mindre fönster*/}
				<a href="#nav" className="hamburger"></a>
				<a href="#nav" className="hamburger"></a>
				<a href="#nav" className="hamburger"></a>
			</div>
			<a href="#nav" id="hamburger-title" className="active">Jay Graydon</a>   
			
			<div className="nav" id="nav">
				
			<div id="links">
			    <NavLink to="index" className="active">Home</NavLink>
			    <NavLink to="About" className="active">About</NavLink>
			    <NavLink to="Songs" className="active">Songs</NavLink>
			    <NavLink to="news" className="active">News</NavLink>
			    <NavLink to="studio" className="active">Studio</NavLink>
			    <div className="close-container">
			    	{<a className="close" href="#">
					Close
			      </a>}
				</div>
			</div>
			
		
			</div>
			
		    </header>)
		
	}
}

export default Header;