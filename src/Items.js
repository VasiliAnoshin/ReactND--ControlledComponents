import React, { Component}  from 'react';
import PropTypes from 'prop-types';

class Items extends Component{
	render(){
		return(
			<div>
				<p className="items">Items</p>
				<ol className="item-list">
					{this.props.state.items.map((item, index) =>
					<li key={index}>{item}</li>)}
				</ol>
			</div>
	)}
} 
Items.propTypes = {
	state: PropTypes.object.isRequired,
};


export default Items;