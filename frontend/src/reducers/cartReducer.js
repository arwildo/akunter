import Item1 from '../images/beef-chicken-original.png'
import Item2 from '../images/beef-chicken-deluxe.png'
import Item3 from '../images/beef-madness.png'
import Item4 from '../images/chicken-crispy.png'
import { ADD_TO_CART} from '../actions/action-types/cart-actions'


const initState = {
  items: [
    {id:1,title:'Beef', desc: "Original", price:22,img:Item1, style:"bg-yellow-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},
    {id:2,title:'Beef', desc: "Deluxe", price:32,img: Item2, style:"bg-green-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},
    {id:3,title:'Beef', desc: "Madness",price:44,img: Item3, style:"bg-purple-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},
    {id:4,title:'Chicken', desc: "Original", price:20,img:Item1, style:"bg-yellow-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},
    {id:5,title:'Chicken', desc: "Crispy",price:28,img: Item4, style:"bg-green-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},
    {id:6,title:'Chicken', desc: "Deluxe", price:30,img: Item2, style:"bg-purple-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"}
  ],
  addedItems:[],
  total: 0
}

const cartReducer= (state = initState,action)=>{
  
  // INSIDE HOME COMPONENT
  if(action.type === ADD_TO_CART){
      let addedItem = state.items.find(item=> item.id === action.id)

      // Check if the action id exists in the addedItems
      let existed_item= state.addedItems.find(item=> action.id === item.id)

      if(existed_item)
        {
          addedItem.quantity += 1 
            return{
              ...state,
                total: state.total + addedItem.price 
                }
        }
      else {
        addedItem.quantity = 1;
        // Calculating the total
        let newTotal = state.total + addedItem.price 
        
        return{
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal
        }
        
    }
  }
  else{
      return state
  }
}

export default cartReducer;
