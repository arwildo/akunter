import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Pay extends Component{

  render(){
            
    let addedItems = this.props.items.length ?
      (  
        this.props.items.map(item=>{
          return(
            
            <li className="collection-item avatar" key={item.id}>
              <div className="item-img"> 
                  <img src={item.img} alt={item.img} className=""/>
              </div>
          
              <div className="item-desc">
                  <span className="title">{item.title}</span>
                  <p>{item.desc}</p>
                  <p><b>Price: {item.price}$</b></p> 
                  <p>
                      <b>Quantity: {item.quantity}</b> 
                  </p>
                  <div className="add-remove">
                      <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                      <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                  </div>
                  <button className="waves-effect waves-light btn pink remove">Remove</button>
              </div>
              
            </li>                        
          )
        })
      ):

      (
        <div className="text-gray-300 bg-red-300 h-screen"> 
          <div className="text-gray-300 bg-blue-300 p-auto"> 
            <p className="block h-8 text-7xl leading-8 text-center align-middle">
              <i className="mdi mdi-cart-outline"></i>
            </p>
            <p className="block text-sm m-6 leading-none text-center align-middle">Empty</p>
          </div>
        </div>
      )
    return(
    <>
      {/*
      <div className="container">
        <div className="cart">
          <ul className="collection">
            {addedItems}
          </ul>
        </div>  
      </div>
      */}
      <div className="flex h-screen justify-center items-center">
        <div className="text-center text-gray-300">
          <p className="block h-8 text-7xl leading-8 text-center align-middle">
            <i className="mdi mdi-cart-outline"></i>
          </p>
          <p className="block text-sm m-6 leading-none text-center align-middle">Empty</p>
        </div>
      </div>
    </>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems
  }
}

export default connect(mapStateToProps)(Pay)
