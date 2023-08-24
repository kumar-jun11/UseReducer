import React,{useReducer} from 'react'
 
                // UseReducer Complex123  

const initailstate= {
    counter:0
}
const reducer = (state,action) =>
{
   switch(action.type)
   {
          case 'Increment':
           return {counter:state.counter+ action.value}
          case 'Decrement':
           return {counter:state.counter- action.value}
          case 'Reset':
           return initailstate
           default:
             return state 
   }
}

function Reducer2() {
     const[count,dispatch]= useReducer(reducer,initailstate);
  return (
    <>
    <div>
        <div>count : {count.counter}</div>
        <button onClick={()=> dispatch({type : 'Increment',value :5})}>Increment</button>
        <button onClick={()=> dispatch({type : 'Decrement',value :5})}>Decrement</button>
        <button onClick={()=> dispatch({type : 'Reset',value :1})}>Reset</button>
    </div>
    </>
  )
}

export default Reducer2