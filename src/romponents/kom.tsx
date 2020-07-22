import React, { useEffect } from 'react';
import axios from '../config/axios.config';
// import axios from 'axios';

function Setting() {
  let token: string = localStorage.getItem('Token') || '';

  const fetchDetails = async () => {
    if (token != '') {
      const res = await axios.get(`/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    }
  };

  useEffect(() => {
    fetchDetails();
  });
  return (
    <div>
      <h1>Welcome to devsnest</h1>
      <button onClick={fetchDetails}>Button</button>
    </div>
  );
}

export default Setting;
