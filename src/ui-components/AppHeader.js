import React from 'react';

class AppHeader extends React.Component {
	
  constructor(props) {
	super(props);
	
	this.clickOnHome = this.clickOnHome.bind(this);
	this.clickOnCart = this.clickOnCart.bind(this);
  }
  
  clickOnHome(){
	this.props.onViewChange(false);
  }
  
  clickOnCart(){
	this.props.onViewChange(true);
  }
	
  render () {
	  
	  let home = this.props.cart ? '' : 'active';
	  let cart = this.props.cart ? 'active' : '';
	  
	  return (
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
			<div className="navbar-header">
			  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>                        
			  </button>
			  <a className="navbar-brand" href="#">Flower Store</a>
			</div>
			<div className="collapse navbar-collapse" id="myNavbar">
			  <ul className="nav navbar-nav">
				<li className={home}><a href="#" onClick={this.clickOnHome}>Home</a></li>
			  </ul>
			  <ul className="nav navbar-nav navbar-right">
				<li className={cart}><a href="#" onClick={this.clickOnCart}><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
			  </ul>
			</div>
		  </div>
		</nav>
	  );
  };
}
export default AppHeader;