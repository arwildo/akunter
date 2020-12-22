import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useAlert } from 'react-alert';

import { removeItem } from '../actions/cartActions';

class Recipe extends Component {
  // Remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  saveData = (data) => {
    const d = new Date(),
      dformat = [d.getDate(),
                d.getMonth()+1,
                d.getFullYear()].join('-')+' '+
                [d.getHours(),
                d.getMinutes()].join(':');

    let activeData = {item: data.id, quantity: data.quantity, time: dformat}

    axios
      .post("/api/akunters/", activeData);
    this.handleRemove(data.id);
  }

  runSaveData = () => {
    this.props.addedItems.map(this.saveData);
    useAlert().show("Success wow");
  }

  render(){
    return(
      <div className="container">
        <button 
          className="text-base mx-auto mt-12 mb-28 bg-blue-500 text-white hover:bg-indigo-500 flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer transform transition-all duration-300 scale-100 hover:scale-95"
          onClick={() => this.runSaveData()}
        >
          Checkout $ {this.props.total}K
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    addedItems: state.addedItems,
    total: state.total
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    removeItem: (id)=>{dispatch(removeItem(id))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
