import React from 'react'
import Homeimg from "./Welcome to the future world.png"
import "./Home.css"
import Navbar from './Navbar'
import Coding from "./coding-course-icon.jpg"

import Blockchain from "./blockchain-course-icon.jpg"
import Ataltinkeringlab from "./ataltinkeringlab.png"
import Ai from './ai.webp'
import Iot from "./iot.jpeg"
import Autocad from "./autocad.jpeg"
import EmbedRobotics from "./embeddedsystemrobotics.png"
import Datascience from "./datascience-course-icon.jpg"
import Techforkids from "./techforkids.png"
import Teamwork from "./Teamwork.png"
import Advanced from "./advanced-technologies.webp"
import Logic from "./Logic.png"
import Connectivity from "./Connectivity.png"
import Creative from "./Creative Thinking.png" 
import WhyTechforkids from "./why-techkids.png"
import Stem from "./stem.webp"
import Oureducators from './Experts-rafiki.png'
import Atl from "./atl.jpg"
import Iot2 from "./iot2.png"
import Roboticslab from './roboticslab.png'
import Designthinking from "./designthinking.png"
import Ai2 from "./ai2.png"
import Physicalattention from "./physicalattention.png"
import Kit from "./kit.png"
import Certificate from "./certificate.png"
import Footer from './Footer'
import Registerimg from "./corporate collaboration.png"
const Home = () => {

    const offerstyle={
        backgroundColor: "#7800af",
        height:"450px",
        fontSize:"50px",
        fontWeight:"600",
    }
    const offerstyle2={
       marginTop:"50px"
    }
    const offerstyle1={
        marginTop:"70px"
     }
  return (
    <div className='home'>


<Navbar/>

<div className='d-flex justify-content-center'>
    <div className='home-container'>
 
   <div className='homebotanime'>
    <div><img src={Homeimg}  class="img-fluid"/>
    </div>
    <div className="home-text text-right">Welcome to the <span>Future World</span>
    <h3 className='mt-2'><span style={{color:"rgb(111, 0, 255)"}}>Enroll to </span> our classes and <span style={{color:"rgb(111, 0, 255)"}}>develop yourself, </span>be valuable</h3>
    <div className='home-book'>
    <a href="/bookyourfreesession" class="btn-shine" target="_blank"> Book Your Free Session </a>
    </div>
    </div>

   </div>
</div>
 
   <div className='register'>
  
   
   
   </div>
    </div>


    <div className='d-flex justify-content-center'>
    <div className='row ataltinkeringlab'>
   
    <div className='col-md-6'>
    <div className='text-left atl-text'>Why  Need <span style={{color:"rgb(88, 0, 230)"}}>ATAL TINKERING LAB (ATL) ?</span></div>
    <p className='mt-4'>
    Innovation and entrepreneurship have become an integral part of our nation, establishing the ATAL Tinkering Lab (ATL)
     in schools, colleges, and physical innovation centers have made technology and innovation accessible to the 
     students right from a young age. Atal Tinkering Lab is a flagship initiative of the ATAL Innovation Mission (AIM),
      to cultivate an innovative mindset amongst high school students across the country. 
      ATAL Tinkering Lab is designed to help and nurture innovation amongst young minds. 
    The scheme enables students to explore new ideas, test them and follow the ‘learning by doing approach'.
    </p>
    </div>
    <div className='col-md-6 atlvideo'><iframe className='img-fuild' src="https://www.youtube.com/embed/oHu91kgP6-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
    </div>



    
<div className='d-flex justify-content-center'>
    <div className='techforkids row' style={{marginTop:"50px"}}>
    <div className='col-md-6'>
    <img src={Techforkids} alt="tech for kids"/>
     </div>
    <div className="provide-text col-sm-6 p-2">
    
    <h1 className='text-left p-2'>Technology For <span>Kids</span></h1>
    <h3 className='text-left p-2'>Create a <span>Passion</span> for <span>Technology!</span></h3>
    <p>Kids have a natural curiosity that lends itself to
    science, technology, math, and engineering. At
    technology For Kids, we inspire kids to build on their
    innate desire for answers by exploring technology
    concepts in fun, and hands-on. We offer robotics, IoT,
    Artificial Intelligence & Machine Learning, and other
    special courses designed to present kids, with
    challenging yet accessible technological activities
    from which they can learn and grow.
    Ready to learn more about our programs at
    Technology For Kids? Explore our site and sign up
    today!
    </p>
    </div>
  
    </div>

    </div>


   
    <div className='courses' style={{marginTop:"50px"}} >
    <h1 className='text-center'>Our <span>Programs</span></h1>
    <div className='d-flex justify-content-center '>
    <div class="row">
		<div class="col-md-3">
   
   <a href='#'>
 
   
   
   <div class="profile-card-2"><img src={EmbedRobotics} class="img img-responsive" style={{width:"270px"}}/>
   <p className='profname1'>Learn </p>
       <div class="profile-name">Embedded System Robotics</div>
       
       
  
</div>
    </a>
</div>

<div class="col-md-3">
   
   
    <div class="profile-card-2"><img src={Coding} class="img img-responsive"/>
    <p className='profname1'>Learn </p>
        <div class="profile-name"> Programming Languages</div>
        
        
    </div>
</div>
<div class="col-md-3">
   
   
    <div class="profile-card-2"><img src={Iot} class="img img-responsive"/>
    <p className='profname1'>Learn </p>
        <div class="profile-name"> Internet of Things(IOT)</div>
        
        
    </div>
</div>
<div class="col-md-3">
   
   
    <div class="profile-card-2"><img src={Ai} class="img img-responsive"/>
    <p className='profname1 pb-4'>Learn </p>
        <div class="profile-name"> Artificial intelligence and Machine Learning</div>
        
        
    </div>
</div>

</div>
   </div>
  
 </div>
<h1 className="text-center">What <span style={{color:"rgb(88, 0, 230)"}}>We Offer</span></h1>
<div className="text-center what-we-offer-text p-4">
QNOVATE Labs offers an integrated Science, Technology, Engineering, and Mathematics (STEM) education based on future
 technology for the school segment. Also, we are providing physical labs for students, so that they can learn real-life 
problem-solving strategies and hands-on project-based learning. QNOVATE Labs is the future of technology for students.
</div>
<div className='d-flex justify-content-center'>
<div className='offer row '>
<div className='col-md-4 '>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Atl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">ATAL TINKERING LAB (ATL)</h5>
    <p class="card-text">QNOVATE Labs is a one stop solution for
     ATL setups with the end-to-end execution of these labs through the unique QNOVATE Labs Pro (manually) kits, products and procedures.</p>
   
  </div>
</div>

</div>
<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Roboticslab} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">STEM and ROBOTICS Lab </h5>
    <p class="card-text">Students will
     get an opportunity to work with tools, Controllers, Sensors, and equipment to understand what how and why aspects of STEAM
      and Robotics</p>
   
  </div>
</div>

</div>
<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Iot2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Internet of Things(IoT) </h5>
    <p class="card-text">Understand IoT in a fun way using sensors, processing ability, software, and other technologies that connect 
    and exchange
     data with other devices. Students get to Design and Develop Innovative Prototypes of Real-world problems using IoT Connected Solutions. </p>
   
  </div>
</div>

</div>
<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Autocad} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">3D Printing  </h5>
    <p class="card-text">Additive manufacturing is the construction of a three-dimensional object from a CAD model or a digital 3D model. With different types of 3D designing software,
     students can learn about designing as well as 3D printing using a 3D printer. It helps students to see the reality of their imagination. </p>
   
  </div>
</div>

</div>
<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Designthinking} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Design Thinking  </h5>
    <p class="card-text">
    In our design thinking lab, students get to k about various types of cognitive, 
    strategic, and practical processes to develop new things and recognize problems to solve, design, prototype, and test solutions for them. 
    </p>
   
  </div>
</div>

</div>

<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Ai2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">AI Connect (Artificial Intelligence)   </h5>
    <p class="card-text">
    AI Connect lets you run and write code in any browser, on any device. It works instantly without downloading plugins or installing software.
     AI Connect gives reallife exposure to AI concepts. Using this curriculum students can understand the real use of Artificial Intelligence  
    </p>
   
  </div>
</div>


</div>

<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Physicalattention} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">1:1 physical Attention </h5>
    <p class="card-text">
    It is individual
     attention which helps the learner to focus and sustain attention, thereby making the available classroom time more fruitful.  
    </p>
   
  </div>
</div>


</div>
<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Kit} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">QNOVATE Lab KIT pro  </h5>
    <p class="card-text">
    Robotics kits are educational products developed as tools to teach programming, electronics, and various sensor technologies through 
    the construction of robotics projects. A kit generally provides a controller, motors, sensors, and various building components.
    </p>
   
  </div>
</div>


</div>
<div className='col-md-4'>
<div class="card" style={{width:"20rem"}}>
  <img class="card-img-top" src={Certificate} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Certificate  </h5>
    <p class="card-text">
    Our credentials help a corporate resource to judge a candidate, so that the corporate resource understands how proficient that candidate is in advanced training, 
    information and tools, technology and strategy. In this way, companies can support candidates to improve their significant services. 
    </p>
   
  </div>
</div>
</div>

</div>

</div>
<div className='kids-learn kids-bg text-center'>

<h1>Your <span style={{color:"#510cf1"}}>Child</span> will Learn</h1>
<div className='row'>
<div className='col-md-2'>
<div class="card" >
  <img class="card-img-top" src={Teamwork} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"25px"}}>Teamwork</p>
  </div>
</div>

</div>

<div className='col-md-2'>
<div class="card" >
  <img class="card-img-top" src={Advanced} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"25px"}}>Advanced Technologies</p>
  </div>
</div>

</div>

<div className='col-md-2'>
<div class="card" >
  <img class="card-img-top" src={Logic} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"25px"}}>Logic</p>
  </div>
</div>

</div>

<div className='col-md-2 ' >
<div class="card">
  <img class="card-img-top" src={Connectivity} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"25px"}}>Connectivity</p>
  </div>
</div>

</div>

<div className='col-md-2' >
<div class="card">
  <img class="card-img-top" src={Creative} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text" style={{fontSize:"25px"}}>Creative Thinking</p>
  </div>
</div>

</div>


</div>

</div>
<div className='d-flex justify-content-center'>
<div className='whytechforkids row' style={{marginTop:"50px"}}>
<h1 className='text-center pt-4 pb-4'>Why <span style={{color:"#6517e4"}}>Technology</span> For Kids? </h1>
    <img src={WhyTechforkids} className="col-sm-6" alt="why tech for kids"/>
    <div className="provide-text col-sm-6">
    
    
    <h3 className='text-left' style={{fontWeight:"bolder"}}>” Your child can learn <span style={{color:"#510cf1"}}>logic, creative thinking, experiment “</span></h3>
    <p className='text-left'>
    In 1968, George Land conducted a research study to test the creativity of 1,600 children ranging in ages from
     three-to-five years old who were enrolled in a Head Start program. This was the same creativity test he devised
      for NASA to help select innovative engineers and scientists. Technology is a fun tool for kids to create their
       curiosity, curiosity to ask questions, imagination to explore - 
    features that will dispensing any child well in almost any career, in every hobby and life. 
    </p>
    </div>
    </div>
    </div>
<div className='d-flex justify-content-center'>
<div className='our-educators row'>
<div className='col-md-6 our-educators-text'><div className='text-left our-edu-header'>Our <span style={{color:"rgb(88, 0, 230)"}}>Expert</span></div>
<p className='text-left mt-4  our-educators-text' style={{fontFamily:"'Montserrat', sans-serif"}}>We at QNOVATELABS have curated a four-step teacher selection process that sure to get the best industry experts for your child, who are also very passionate
 about technology. Our teachers are all STEM-certified experts with rich experience in the technological industry. </p>
 <a href='/bookyourfreesession'><button type="button" class="btn"><i class="fa-solid fa-rocket-launch"></i>Book Your Free Session </button>
 </a>
</div>
<div className='col-md-6 column-img mt-4'><img className="img-fluid" src={Oureducators}/></div>
</div>
</div>
<div className='d-flex justify-content-center'>
<div className='why-stem'>

<div className='row'>

<div className='col-sm-6'><img src={Stem} className="img-fluid"/></div>

<div className='col-sm-6 stem-col' style={{backgroundColor:"white"}}>
<div className='why-stem-header p-4'>
<h1  style={{fontWeight:600}} className="text-left">Why  <span style={{color:"#510cf1"}}>STEM Education</span></h1>
</div>
<p className='p-4 text-left' style={{color:"black"}}>
Science, Technology, Engineering, and Math - STEM is a top priority for educators today. Century Skills, Design Thinking, Digital Technologies, Maker Space, 
Tinkering Labs, and Experiential Learning have also garnered significant attention from the global education community.
</p>

</div></div>
</div>

</div>
<div className='d-flex justify-content-center'>
<div className='row m-4 collaborate'>

<div className='col-md-6 register' style={{marginTop:"40px"}}>
<h3 className='text-left'>Would you like to corporate <span style={{color:"#510cf1"}}>collaboration</span> with <span style={{color:"#510cf1"}}>QNOVATE Labs ?</span></h3>
<p className='text-left collaborate-text'>Collaboration is the practice of working together towards a common goal or purpose. While teams or individuals might collaborate on a one-time basis to achieve a short-term goal, collaboration as a company-wide practice involves creating connections over time. </p>
<a href="/collaborate" target="_blank" className='p-2 collaboratebtn'> Register </a>
</div>
<div className='col-md-6 register-img'><img className="img-fluid" src={Registerimg}/></div>
</div>
</div>
<div>
<Footer/>
</div>
    </div>
  )
}

export default Home