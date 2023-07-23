import React, { useState, useEffect } from 'react';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Data List:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name: {item.title}</strong>
            <p>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
