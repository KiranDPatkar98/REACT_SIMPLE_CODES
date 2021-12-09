import logo from './logo.svg';
// import './App.css';
import Mousehover from './Components/Mousehover';
import IMG1 from "./Images/Digital-transformation.jpg"
import IMG2 from "./Images/ATH.jpg"
import IMG3 from "./Images/service-3.jpg"
import IMG4 from "./Images/Msnaged-Services.jpg"
import IMG5 from "./Images/GRC_HP.jpg"
import IMG6 from "./Images/Zendesk.jpg"
import Menubar from './Components/Menubar';
// import { Carousel } from 'react-bootstrap';
import Carousel1 from './Carousel';



function App() {
  return (
    <>

    {/* <Menubar /> */}
    {/* <Carousel1 /> */}
    <div style={{display:"flex"}} >
      
 {/* <Mousehover img={IMG1} info="Digital Transformation" para="your digital transformation journey with best-in-class technology solutions" /> 
 <Mousehover img={IMG2} info="Application & Technology" para="Cutting-edge technology and application solutions for modern enterprises" />
 <Mousehover img={IMG3} info="Product Innovation" para="Innovating businesses with best-in-class product engineering solutions"/>  */}
 </div>
 <div style={{display:"flex"}}>
 <Mousehover img={IMG4} info="Managed Services" para="Tailored end-to-end Managed Services to optimize business value<br><br>LEARN MORE" /> 
 <Mousehover img={IMG5} info="Governance, Risk and Compliance" para="Optimize your business with Estuate's industry-best GRC framework"/>
 <Mousehover img={IMG6} info="Zendesk"  para="Your Zendesk partner for implementation, training, consultancy and integrations"/> 


    </div>
    </>
  );
}

export default App;
