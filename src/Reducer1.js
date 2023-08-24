import React,{useReducer} from 'react'
 
                // UseReducer Complex1  

const initailstate= {
    counter:0
}
const reducer = (state,action) =>
{
   switch(action.type)
   {
          case 'Increment':
           return {counter:state.counter+1}
          case 'Decrement':
           return {counter:state.counter-1}
          case 'Reset':
           return initailstate
           default:
             return state 
   }
}

function Reducer1() {
     const[count,dispatch]= useReducer(reducer,initailstate);
  return (
    <>
    <div>
        <div>count : {count.counter}</div>
        <button onClick={()=> dispatch({type : 'Increment'})}>Increment</button>
        <button onClick={()=> dispatch({type : 'Decrement'})}>Decrement</button>
        <button onClick={()=> dispatch({type : 'Reset'})}>Reset</button>
    </div>
    </>
  )
}

export default Reducer1