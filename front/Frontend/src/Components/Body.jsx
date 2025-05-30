import { Link } from "react-router-dom"
import LOGO from '../assets/images/logo.png'
import mainpic from '../assets/images/body-background.jpg';

import pic1 from '../assets/images/pic-1.jpg'
import pic2 from '../assets/images/pic-2.jpg'
import pic3 from '../assets/images/pic-3.jpg'
import pic4 from '../assets/images/pic-4.jpg'
import pic5 from '../assets/images/pic-5.jpg'
import '../index.css'

function Body() {
  const isLogin = localStorage.getItem('login');
  const handlelogout = () =>{
    localStorage.removeItem('login')
    window.location.reload();
  }
  return (
    <div>      
      <div className="body">
    <img className="bodypicture" src={mainpic} alt="mainpic"/>
    {
      !isLogin?
      <>
      <Link to="/login" ><button className="signin">SIGN IN</button></Link>
      <Link to="/signup"><button className="signup">SIGN UP</button></Link></>
      :
      <button className="signup" onClick={handlelogout}>Logout</button>
    }
    {
      isLogin?     <Link to="/dashboard" ><button className="workout">Workouts</button></Link> :     <Link to="/login" ><button className="workout">Workouts</button></Link>
    }


    <img className="Logo" src={LOGO} alt="LOGO" /> 
    <h2 className="webname">MyFit MyHealth</h2>
    <img className="picone" src={pic1} alt="pic1" />
    <img className="pictwo" src={pic2} alt="pic2" />
    <img className="picthree" src={pic3} alt="pic3" />
    <img className="picfour" src={pic4} alt="pic4" />
    <img className="picfive" src={pic5} alt="pic5" />

    <div className="piconecontent">
      <h2 className="p1">Set Goals.</h2>
      <h2 className="p2">Log Workouts.</h2>
      <h2 className="p3">Stay On Track.</h2>
      <p>Easily track your Workouts, set Training Plans, 
        <br />and discover new Workout Routines to crush<br /> your goals.</p>
    </div>

    <div className="pictwocontent">
      <h1 className="p1">CHALLENGE</h1>
    </div>

    <div className="pictwocontent1">
      <h1>PUSH YOUR LIMITS.</h1>
    </div>

    <div className="pictwocontent2">
      <h1>Hit milestones and PR’s by taking on a new challenge every month.</h1>
    </div>

    <div className="picthreecontent">
      <h1 className="p1">BUILT TO MAKE YOU 
        <br />BETTER</h1>
    </div>
    
    <div className="picthreecontent1">
      <h1>Smarter Training</h1>
    </div>
    
    <div className="picthreecontent2">
      <p>Turn your phone or smartwatch into your coach—
        <br />track your workouts and get tons of data and tips
        <br /> to help you run better.</p>
    </div>

    <div className="picthreecontent3">
      <h1>Custom Workouts</h1>
    </div>

    <div className="picthreecontent4">
      <p>Track your workouts and get tons of data and tips
        <br /> to help you run better.</p>
    </div>

    <div className="pic5content">
      <p>MyFit MyHealth</p>
    </div>

   
  </div></div>
  )
}

export default Body;