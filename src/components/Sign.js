// src/components/NamePasswordForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NamePasswordForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    dob: '',
    address: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) =>   {
    e.preventDefault();
    await localStorage.setItem('formData', JSON.stringify(formData));
    
    navigate('/home', { state: formData });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form 
        className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">Register</h2>
        
        <div className="mb-4">
          <label className="block text-orange-400 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="name" 
            type="text" 
            placeholder="Name" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>

        <div className="mb-4">
          <label className="block text-orange-400 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="text" 
            placeholder="Username" 
            name="username"
            value={formData.username} 
            onChange={handleChange} 
          />
        </div>

        <div className="mb-4">
          <label className="block text-orange-400 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="dob" 
            type="date" 
            placeholder="Date of Birth" 
            name="dob"
            value={formData.dob} 
            onChange={handleChange} 
          />
        </div>

        <div className="mb-4">
          <label className="block text-orange-400 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="address" 
            type="text" 
            placeholder="Address" 
            name="address"
            value={formData.address} 
            onChange={handleChange} 
          />
        </div>

        <div className="mb-6">
          <label className="block text-orange-400 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******************" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default NamePasswordForm;
