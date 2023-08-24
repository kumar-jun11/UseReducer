import React,{useReducer} from 'react'
 
                // UseReducer Simple  

const initailstate=0;
const reducer = (state,action) =>
{
   switch(action)
   {
          case 'Increment':
           return state+1
          case 'Decrement':
           return state-1
          case 'Reset':
           return initailstate
           default:
             return state 
   }
}

function Reducer() {
     const[count,dispatch]= useReducer(reducer,initailstate);
  return (
    <>
    <div>
        <div>count : {count}</div>
        <button onClick={()=> dispatch('Increment')}>Increment</button>
        <button onClick={()=> dispatch('Decrement')}>Decrement</button>
        <button onClick={()=> dispatch('Reset')}>Reset</button>
    </div>
    </>
  )
}

export default Reducer