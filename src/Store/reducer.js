 
 
 // initState

import { ADD_TODO, DELETE_TODO, SET_TODO } from "./constants";

 const initState = {
  job:{ id: '', name:""},
  jobs:[ {id: 1, name:"lau nha"},{id: 2, name:"quet nha"},{id: 3, name:"don nha"}] 
 
 }

 // reduecer
 const reducer = (state, action) =>{
   switch(action.type){
      case SET_TODO:
         return{
            ...state,
            job: action.payload
         };

      case ADD_TODO:
         return {
            ...state,
            jobs:[...state.jobs, action.payload]
         };

      case DELETE_TODO:
         const newjobs = [...state.jobs];
         newjobs.splice(action.payload,1);
      return{
         ...state,
         jobs:newjobs
      };

      default:
         throw new Error(`Invalid action ${action.type}`);
   }
 }

 export {initState}
 export default reducer;