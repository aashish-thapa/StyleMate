import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fashionStyle: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          fashionStyle: formData.fashionStyle,
        }),
      });

      if (!response.ok) {
        throw new Error('Error registering user');
      }

      const data = await response.json();
      toast.success(data.message);
       // Redirect to login after successful registration
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <RegisterStyledForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <select name="fashionStyle" value={formData.fashionStyle} onChange={handleChange} required>
          <option value="">Select Fashion Style</option>
          <option value="Streetwear">Streetwear</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Sporty">Sporty</option>
          <option value="Bohemian">Bohemian</option>
        </select>
        <button type="submit">Register</button>
      </RegisterStyledForm>
      <ToastContainer />
    </>
  );
};

// Styled component
const RegisterStyledForm = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    color: #333;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #5a67d8;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #434190;
    }
  }
`;

export default Register;
