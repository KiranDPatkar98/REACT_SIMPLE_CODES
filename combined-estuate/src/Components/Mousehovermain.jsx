import React from 'react'
import Mousehover from './Mousehover'
// import IMG1 from "../Images/Digital-transformation.jpg"
// import IMG2 from "../Images/ATH.jpg"
// import IMG3 from "../Images/service-3.jpg"
// import IMG4 from "../Images/Msnaged-Services.jpg"
// import IMG5 from "../Images/GRC_HP.jpg"
// import IMG6 from "../Images/Zendesk.jpg"
import Details from './Details'


const Mousehovermain = () => {
    // console.log(Details);
    return (
        <div style={{width:"100%"}}>
        
            {Details.map((value)=><Mousehover img={value.img} info={value.info} para={value.para}/>)}

 </div>   
     
    )
}

export default Mousehovermain
