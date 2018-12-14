import React, { Component}  from 'react';
import PropTypes from 'prop-types';

class ShopingList extends Component{
			render() {
            		return (
                  <div className ="ShopLst"> 
                      <h2>Shopping List</h2>
                               <form onSubmit={this.props.addItem}>
                                            <input
                                              type="text"
                                              placeholder="Enter New Item"
                                              value={this.props.inputValue}
                                              onChange={this.props.statusChange}
                                            />
         					 				<button disabled={this.props.btnDisable}>Add</button>
       						 </form>
							</div>
              		
                    )}
}

ShopingList.propTypes  = {
		addItem:  PropTypes.func.isRequired,
        inputValue: PropTypes.string,
}

export default ShopingList;