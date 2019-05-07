import React from 'react';
import './css/App.css';

class Special extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			show: false,
			promotions: [  
			   {  
				  id:1,
				  name:"Autumn Promo",
				  product:"Chrysanthemums",     
				  price:"$ 21.00",
				  end_date: "2019-08-10"
			   },
			   {  
				  id:2,
				  name:"Sale of the century",
				  product:"Lilacs",
				  price:"$ 10.00",
				  end_date: "2019-07-01"
			   },
			   {  
				  id:3,
				  name:"24 Hour Sale",
				  product:"Roses",
				  price:"$ 19.00",
				  end_date: "2019-05-09"
			   }
			]
		}
		
		this.toogleModalStatus = this.toogleModalStatus.bind(this);
		this.add = this.add.bind(this);
	}
	
	toogleModalStatus() {
		
		this.setState({
			show: !this.state.show
		});
	}
	
	add(id) {
		let toAdd = this.state.promotions.find( (item)=> {
			return item.id === id;
		});
		
		this.props.addPromotion(toAdd);
	}
	
	render() {
		let activePromotion = this.state.promotions.map((item, index)=>{
			let promoDate = new Date(item.end_date);
			let today = new Date().setHours(0,0,0,0);
			
			if(promoDate >= today) {
				return (
					<tr key={index}>
						<td>{item.name}</td>
						<td>{item.product}</td>
						<td>{item.price}</td>
						<td> 
							<button type="button" className="btn btn-primary pull-right" onClick={this.add.bind(this,item.id)}> 
								Add to cart 
							</button> 
						</td>
					</tr>
				);
			}
			
		})
		
		return (
			<div>
				<button type="button" className="btn btn-success pull-right" data-toggle="modal" data-target="#myModal"> Add Specail Deals </button> 
				<div className="modal fade" id="myModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
							  <button type="button" className="close" data-dismiss="modal">&times;</button>
							  <h4 className="modal-title">Active Promotions</h4>
							</div>
							<div className="modal-body">
								<table className="table table-hover">
									<thead>
									  <tr>
										<th>Name</th>
										<th>product</th>
										<th>Price</th>
										<th> Action </th>
									  </tr>
									</thead>
									<tbody>
										{activePromotion}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Special;