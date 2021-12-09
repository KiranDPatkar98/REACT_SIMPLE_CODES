import logo from "./logo.svg";
import "./App.css";
import Bar from "./Components/Bar";
import Carouselcomp from "./Components/Carousel";
import img1 from "./Images/imagee1.png";
import img2 from "./Images/Imagee2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/image.webp";
import img7 from "./Images/image2.webp";
import img8 from "./Images/Ebook-Decoding-eTAS.jpg"
import img9 from './Images/estuate-care-homepage-logo.jpg'
import img10 from './Images/Homepage-Datamasking-Banner.png'
import Button from "./Components/Button";
import Mousehovermain from "./Components/Mousehovermain";
import Card from "./Components/Card";
import Footermain from "./Components/Footermain";

function App() {
  return (
    <div>
      <Bar />
      <div id="carousel-1">
        <Carouselcomp
          img1={img1}
          img2={img2}
          img3={img1}
          img4={img2}
          img5={img1}
          h4="Another feather in our cap"
          h1="Estuate bags
          MetricStream Partner
          Excellence Award cap"
          
     
        />
       
      </div>
      <div id="body">
        <p>
      Estuate is an ISO certified, global Product Engineering and IT Enterprise Services company headquartered in Milpitas, California, and with offices in Canada, India, and the UK. The company specializes in leading-edge technology solutions such as Digital Transformation Solutions, Product Engineering Services, Data & Analytics, Subscription Billing, Revenue Management & Governance, and Risk & Compliance.
      </p>
      <Button content="Read More"/>
     
      </div>
      <div id="services">
        <h1>Our Services</h1>
        <br/>
        <p>
        Estuate helps businesses unlock their true potential and grow in a dynamic world with innovative technology solutions. Discover our range of IT solutions and services in Data and Analytics, Subscription and Revenue Management, Product Engineering Services, Cloud and other value-added services.
        </p>
        
        <Mousehovermain />
       
        <br/><br/>
        <h1>Our Success Stories</h1>
        <div id="carousel-2">
        <Carouselcomp img1={img6} img2={img7} 
        p1="A market leader in high-performance golf equipment partners with Estuate to drive down IT operations cost &amp; Improve IT user experience."
        p2="An urban mobility platform provider drastically improves time-to-market by partnering with Estuate’s QA Center of Excellence."
        
        />
        
        </div>
      </div>
      <div id="main-card">
     <div id="card-content">

     <Card
      heading = "E-Books"
      img = {img8}
      title = "Decoding the ‘Right Automation Testing Tool’: A Definitive Guide"
     description="Finding a fitting automation testing tool is a growth hack in today’s software landscape. However, you as a decision-driver may think…"
    
      />
    
      <Card
      heading = "Press Releases"
      img = {img9}
      title = "Estuate Extends Helping Hand to Fight COVID-19 in India"
     description="MILPITAS, CA. – May 11, 2021: Estuate Inc., a global IT company, has collaborated with Sewa International for helping to fight against COVID-19 in India…"
     
      />
      <Card
       heading = "Latest Blogs"
      img = {img10}
      title = "Data Masking in the Wake of Big Data Management"
     description="Modern businesses feed on data for breakfast, lunch, and dinner. Today, so significant is good clean data for business growth that even the minutest…"
     />
</div>
     </div>
     
     <div id="last" style={{padding:"6%",display:"flex"}} >

<Footermain />

     </div>
     <div id="icon">
     <p>Copyright @ 2021 Estuate. Privacy Policies | Cookies Policies</p>
     <div>
       
     </div>
     </div>
    </div>
  );
}

export default App;






