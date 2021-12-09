import { BUY_CAKE } from "./cakeactiontype"
const initialstate={
    numofcakes:10
}
const Cakereducer=(state=initialstate,action)=>{
switch(action.type){
case BUY_CAKE:return{
    ...state,numofcakes:state.numofcakes-2
}
default:state
}
}
export default Cakereducer