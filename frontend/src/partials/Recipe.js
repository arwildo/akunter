import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useAlert } from 'react-alert';

import { removeItem } from '../actions/cartActions';

// Serverless Demo
const DEMO_MODE = false;


function Recipe(props) {
  const alert = useAlert();
  // Remove the item completely
  const handleRemove = (id) => {
    props.removeItem(id);
  }

  const saveData = (data) => {
    if (DEMO_MODE) {
      const d = new Date(),
        dformat = [d.getDate(),
                  d.getMonth()+1,
                  d.getFullYear()].join('-')+' '+
                  [d.getHours(),
                  d.getMinutes()].join(':');

      let activeData = `item: ${data.id}, quantity: ${data.quantity}, time: ${dformat}`;
      alert.info(activeData);
      handleRemove(data.id);
    }
    else {
      const d = new Date(),
        dformat = [d.getDate(),
                  d.getMonth()+1,
                  d.getFullYear()].join('-')+' '+
                  [d.getHours(),
                  d.getMinutes()].join(':');

      let activeData = {item: data.id, quantity: data.quantity, time: dformat}

      axios
        .post("/api/akunters/", activeData);
      handleRemove(data.id);
    }
  }

  const runSaveData = (total) => {
    props.addedItems.map(saveData);
    if (DEMO_MODE) {
      alert.info("Item data will be saved in the database if DEMO_MODE == false");
    }
    alert.success('Success  $ ' + total +'K');
  }

  return(
    <div className="container">
      <button 
        className="text-base mx-auto mt-12 mb-28 bg-blue-500 text-white hover:bg-indigo-500 flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer transform transition-all duration-300 scale-100 hover:scale-95"
        onClick={() => runSaveData(props.total)}
      >
        Checkout $ {props.total}K
      </button>
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps) (Recipe)
