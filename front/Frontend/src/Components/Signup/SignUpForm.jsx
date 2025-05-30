import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SignUpForm.css';
import axios from 'axios'; // Import axios for making HTTP requests
import {toast} from 'react-toastify'
import LOGO from '../../assets/images/logo.png'
const SignUpForm = () => {
  import('..//Dashboard/Dashboard.css')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Birthdate:', birthdate);
    console.log('Gender:', gender);
    console.log('Country:', country);

    try {
      await axios.post('http://localhost:8000/signup', {
        name,
        email,
        password,
        birthdate,
        gender,
        country
      }).then(()=>{
      console.log("Signup successful")
      toast.success("Signup SuccessFull!")
      localStorage.setItem("login", true);
			setTimeout(()=>{
        window.location.href = "/"
      },2000)
      })
    } catch (error) {
      console.log('Sign-up failed:', error);
    }
  };

  return (
    <div>
          <div className=''>
              <img className="Logo" src={LOGO} alt="LOGO" /> 
             <h2 className="webname pt-4">MyFit MyHealth</h2>
      </div>
      <div className="signup-form-container">
      <div className="head">
        <p className='font-bold text-white bg-black mr-20 mx-auto text-center rounded-md mt-10 pb-4 '>Welcome To MyFit MyHealth</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label>Birth Date:</label>
          <DatePicker selected={birthdate} onChange={(date) => setBirthdate(date)} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='w-full text-white bg-black py-2'>Sign Up</button>
      </form>
    </div>
    </div>
   
  );
};

export default SignUpForm;
