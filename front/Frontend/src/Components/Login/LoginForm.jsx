import { useState } from 'react';
import './LoginForm.css';
import {toast} from 'react-toastify'
import LOGO from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const LoginForm = () => {
  import('../Dashboard/Dashboard.css');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  <div>
  <img className="Logo" src={LOGO} alt="LOGO" /> 
  <h2 className="webname">MyFit MyHealth</h2>
  </div>

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try { 
      await axios.post("http://localhost:8000/login", {
        email: email, password: password
      }
			).then(() => {
				console.log("Login successful")
				toast.success("Login SuccessFull!")
        localStorage.setItem("login", true);
				// setTimeout(() => {
				// 	window.location.href = "/"
				// }, 2000)
        navigate('/ProfileForm')
      
			}).catch((e)=>{
        toast.warning('Error during login:', e)
      }
      )

    } catch (error) {
      console.error('Please Enter Correct Credentials', error);
    }
  };

  return (
    <div>
      <div className=''>
                  <img className="Logo" src={LOGO} alt="LOGO" /> 
                <h2 className="webname pt-4">MyFit MyHealth</h2>
      </div>

    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <p className='log text-2xl w-fit mx-auto font-bold text-white bg-black px-2 py-1 rounded-md mr-8' >Welcome To MyFit MyHealth</p>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='w-full bg-black text-white font-bold px-2 py-2 '>Login</button>
      </form>
    </div>
    </div>
   
  );
};

export default LoginForm;
