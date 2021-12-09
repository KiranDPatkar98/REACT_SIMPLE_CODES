import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Radium from 'radium'

function App() {
  let customStyle1={
    backgroundColor:"red",
    padding:"10px",
    color:"#fff",
    width:"200px",
    fontSize:"30px",
    cursor:"pointer"
  
  }
  let customStyle2={
    border:"2px solid #fff",
    color:"#fff",
    // width:"150px",
    backgroundColor:"grey",
    padding:"10px",
    fontSize:"20px",
    cursor:"pointer",
   
  }
  let style2=(e)=>{
   e.target.style={background:"red",
   padding:"10px",
    fontSize:"20px",
    cursor:"pointer",
    // width:"150px",
    border:"2px solid #fff",
  }
  //  e.target.style.content= ">>"
  }
  
  
  

  return (
    <div>
      <Button style={customStyle1}  action="Learn More" />
    <br/><br/>
    
    <Button style={customStyle2} hover={style2}  action="Read More" />
    </div>
  )
}

export default App ;

