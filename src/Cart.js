import React from 'react';
import './css/App.css';
import Special from './Special';

class Cart extends React.Component {
	constructor(props) {
		
		super(props);
		
		this.state = {
			cartItems : [
				{
					id: 4,
					product: "White Lilacs",
					price: "$ 15.00",
					quantity: 1

				}, {
					id: 5,
					product: "Red Roses",
					price: "$ 5.00",
					quantity: 3
				}
			]
		}
		
		this.addToCart = this.addToCart.bind(this);
	}
	
	addToCart(toAdd) {
		
		let indexToChange = this.state.cartItems.findIndex((item)=>{
			return item.id === toAdd.id;
		});
		let newCart = this.state.cartItems;
		
		if(indexToChange > 0) {
			newCart[indexToChange].quantity++;
		} else {
			toAdd.quantity = 1;
			newCart.push(toAdd);
			
		}
		this.setState({
			cartItems: newCart 
		});
		
	}
	
	render() {
		let checkoutItems = this.state.cartItems.map( (item, index) => {
			
			return (
				<tr key={index}>
					<td>{item.product}</td>
					<td>{item.price}</td>
					<td>{item.quantity}</td>
				</tr>
			);
			
		});
		
		return (
			<div>
				<div className="row">
					<div className="col-xs-6 text-left"> 
						<h3> Checkout Items </h3> 
					</div>
					<div className="col-xs-6"> 
						<Special addPromotion = {this.addToCart} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<table className="table table-striped">
							<thead>
							  <tr>
								<th>product</th>
								<th>Price</th>
								<th>Quantity</th>
							  </tr>
							</thead>
							<tbody>
								{checkoutItems}
							</tbody>
						</table>
					</div>
				</div>
				<div className="row"> 
					<div className="col-xs-12 text-right"> 
						<button type="button" className="btn btn-primary"> Proceed </button>
					</div>
				</div>
			</div>
		);
	}
}

export default Cart;