import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {Icons, ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginStyledForm = styled.form`
  max-width: 400px;
  margin: 80px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
    
    &:focus {
      border-color: #ff7f50;
      outline: none;
    }
  }
  #registerLabel{
    margin-top: 10px;
    margin-left: 0px;
    padding-left: 0px;
  
  
  
  
  
  }
  button {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    background-color: #ff7f50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff4500;
    }
  }

  .link {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #555;
    
    a {
      color: #ff7f50;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;

      &:hover {
        color: #ff4500;
      }
    }
  }
`;
const StyledToastContainer = styled(ToastContainer).attrs({
  // Positioning the toast notification
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: true
})`
  .Toastify__toast {
    background-color: #333;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    padding: 16px;
  }

  .Toastify__toast--success {
    background-color: #4caf50;
    color: #fff;
  }

  .Toastify__toast--error {
    background-color: #f44336;
    color: #fff;
  }

  .Toastify__toast-body {
    font-size: 1rem;
  }

  .Toastify__progress-bar {
    background-color: #ff7f50;
  }

  .Toastify__close-button {
    color: #fff;
  }
`;
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', formData);
      toast.success('Login Successful!', {icon: "🎉",})
    } catch (err) {
      console.error('Error during login', err);
      toast.error('Login failed', {icon: "❌"});
    }
  };
  const navigate = useNavigate();

  return (
    <>
    <LoginStyledForm onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
      <label id='registerLabel'>Don't have an account? </label>
      <button type="submit" onClick={()=>{
        
        navigate('/register');
        return
      }}>Register</button>
    </LoginStyledForm>
    <ToastContainer/>

      </>
  );
};

export default Login;
