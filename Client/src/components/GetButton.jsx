import axios from 'axios';
import { useState } from 'react';


function GetButton() {



  const fetchData = () => {
    fetch('http://localhost:3000/api/get', {
      method: 'POST',
      headers: {
        'type': '/admin/icons'
      }
    })
      .then(response => console.log(response))
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

  };


  return (
    <div>
      <input
        type='text'/>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default GetButton;
