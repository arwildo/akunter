import React, { Component } from 'react';
import { connect } from 'react-redux';

class Recipe extends Component{

  render(){
    return(
      <div className="container">
        <button 
          className="text-base mx-auto mt-12 mb-28 bg-blue-500 text-white hover:bg-indigo-500 flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer transform transition-all duration-300 scale-100 hover:scale-95"
          onClick={() => console.log(this.props.addedItems)}
        >
          Checkout ${this.props.total}K
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    addedItems: state.addedItems,
    total: state.total
  }
}

export default connect(mapStateToProps)(Recipe)
