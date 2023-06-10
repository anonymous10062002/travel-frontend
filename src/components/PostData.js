import React, { useState } from 'react';
import axios from 'axios';

const PostData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travelers, setTravelers] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://travel-trip-u49e.onrender.com/travel/posts', {
  name,
  email,
  destination,
  travelers: parseInt(travelers),
  budget: parseInt(budget),
});

      setName('');
      setEmail('');
      setDestination('');
      setTravelers('');
      setBudget('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Post Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Destination:
          <select value={destination} onChange={(e) => setDestination(e.target.value)} required>
            <option value="">Select a destination</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
        </label>
        <br />
        <label>
          No. of travelers:
          <input
            type="number"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Budget Per Person:
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostData;