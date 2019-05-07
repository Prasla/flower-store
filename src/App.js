import React from 'react';
import './css/App.css';
import AppHeader from './ui-components/AppHeader';
import AppFooter from './ui-components/AppFooter';
import Cart from './Cart'

class App extends React.Component {
	
	constructor(props) {
		super(props);
		
		console.log("test");
		
		this.state = {
			cart: false
		}
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange (val) {
		this.setState({
			cart: val
		});
	}
	

	render() {
		
		var activeView = '';
		
		if(this.state.cart) {
			activeView = <Cart />;
		} else {
			activeView = <h2 className="text-center"> Go to the cart that have pre existing items to checkout. </h2>;
		}
		
		return (
			<div>
				<AppHeader cart={this.state.cart} onViewChange = {this.handleChange}></AppHeader>
					<div className="container"> 
						{activeView}
					</div>
				<AppFooter></AppFooter>
			</div>
		);
	}
}


export default App;
