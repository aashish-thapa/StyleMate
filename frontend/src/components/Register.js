import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fashionStyle: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <select name="fashionStyle" value={formData.fashionStyle} onChange={handleChange} required>
        <option value="">Select Fashion Style</option>
        <option value="Streetwear">Streetwear</option>
        <option value="Casual">Casual</option>
        <option value="Formal">Formal</option>
        <option value="Sporty">Sporty</option>
        <option value="Bohemian">Bohemian</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
