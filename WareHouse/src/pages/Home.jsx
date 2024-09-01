// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchAndFilter from '../components/SearchAndFilter';

function Home() {
  // Fetch filtered data from Redux state
  const { filteredData } = useSelector((state) => state.warehouses);

  return (
    <div className='home-container'>
      <SearchAndFilter />
      <div className="card-container">
        {filteredData.map((item, idx) => (
          <div className="card" key={idx}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 className="card-title">{item.name}</h1>
            </div>

            <p className="card-city">{item.city}</p>
            <div className="card-details">
              <p>Type: <span>{item.type}</span></p>
              <p>Cluster: <span>{item.cluster}</span></p>
              <p>Registration: <span>{item.is_registered ? 'Yes' : 'No'}</span></p>
              <p>Live Status: <span>{item.is_live ? 'Live' : 'Not Live'}</span></p>
            </div>
            <div className='view-btn'>
              <Link to={`/details/${item.id}`}>
                <button>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;



{/* <Link to={`/singleItem/${movie.id}`}></Link> */ }