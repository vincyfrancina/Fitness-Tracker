import LoginForm from './Components/Login/LoginForm.jsx';
import Body from './Components/Body.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./Components/Signup/SignUpForm.jsx";
import DashBoard from "./Components/Dashboard/DashBoard.jsx";
import WorkoutForm from "./Components/WorkOut/WorkOutForm.jsx";
import ProfileForm from "./Components/ProfileForm/ProfileForm.jsx";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/signup" element={<SignUpForm/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      <Route path="/WorkOut1" element={<WorkoutForm/>} />
      <Route path="/ProfileForm" element={<ProfileForm/>} />
      </Routes>
      
      <ToastContainer
      className="w-[20%] whitespace-nowrap"
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLossx
      draggable
      pauseOnHover
      theme="light"
      />
    </Router>
  );
}

export default App;
