import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUser] = useState({})

  const fetchUser = () => {
    axios.get('http://localhost:5000/users').then(res => {
      setUser(res.data)
    })
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => fetchUser()}>Fetch user</button>
    </div>
  );
};

export default Home;
