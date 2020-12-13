import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class Buy extends Component {

  handleClick = (id)=>{
    this.props.addToCart(id); 
  }

  render() {

    let itemList = this.props.items.map(item=>{
      return(
        <button className={item.style} key={item.id} onClick={()=>{this.handleClick(item.id)}}>
          <div className="relative text-white px-4 pb-4 mt-4">
            <img src={item.img} alt={item.title + " " + item.desc}/>
            <span className="block opacity-75 -mb-1 text-left">{item.title}</span>
            <div className="md:flex justify-between">
              <span className="block font-semibold text-md md:text-xl text-left">{item.desc}</span>
              <span className="block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center">$ {item.price}K</span>
            </div>
          </div>
        </button>
      )
    })

    return(
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow">

          <div className="p-18 flex flex-wrap items-center justify-center max-w-3xl mx-auto">
            {itemList}
          </div>

        </main>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)
