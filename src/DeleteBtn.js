import React, { Component}  from 'react';
import PropTypes from 'prop-types';

class DeleteBtn extends Component{
    render(){
        return(
            <button onClick={this.props.deleteLstItem} disabled={this.props.dsbl}>
                Delete Last Item
            </button>
        )
    }
}

DeleteBtn.propTypes = {
    deleteLstItem : PropTypes.func.isRequired,
}

export default DeleteBtn;