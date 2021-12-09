import React from 'react'
import { buycake } from '../redux/Cake/Cakeaction'
import {connect} from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
           <h1>Number of cakes {props.numofcakes}</h1>
           <button onClick={props.buycake}>Buy CAke</button> 
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        numofcakes:state.numofcakes
    }
}
const mapDispatchToprops=dispatch=>{
    return{
        buycake:()=>dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(CakeContainer)
