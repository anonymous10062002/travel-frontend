import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetData = () => {
  const [travels, setTravels] = useState([]);
  const [filterDestination, setFilterDestination] = useState('');

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    try {
      const response = await axios.get('https://travel-trip-u49e.onrender.com/travel/posts');
      setTravels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://travel-trip-u49e.onrender.com/travel/posts/${id}`);
      fetchTravels();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterDestination = async (e) => {
    const selectedDestination = e.target.value;
    setFilterDestination(selectedDestination);

    try {
      const response = await axios.get(`https://travel-trip-u49e.onrender.com/travel/posts?destination=${selectedDestination}`);
      setTravels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSortBudget = async () => {
    try {
      const response = await axios.get('https://travel-trip-u49e.onrender.com/travel/posts?sort=budget');
      setTravels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Retrieve Data</h2>
      <div>
        <label>
          Filter by Destination:
          <select
            value={filterDestination}
            onChange={handleFilterDestination}
          >
            <option value="">All</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleSortBudget}>Sort by Budget</button>
      </div>
      <div>
        {travels.map((travel) => (
          <div key={travel._id}>
            <h3>{travel.name}</h3>
            <p>Email: {travel.email}</p>
            <p>Destination: {travel.destination}</p>
            <p>No. of travelers: {travel.travelers}</p>
            <p>Budget per person: {travel.budget}</p>
            <button onClick={() => handleDelete(travel._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;