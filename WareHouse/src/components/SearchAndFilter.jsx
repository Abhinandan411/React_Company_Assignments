// src/components/WarehouseFilter.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setFilters } from '../redux-temp/slice'; // Ensure path is correct

function WarehouseFilter() {
  const dispatch = useDispatch();
  const { allData, filters, searchTerm } = useSelector((state) => state.warehouses);

  // Unique lists of cities and clusters for filters
  const uniqueCities = [...new Set(allData.map((item) => item.city))];
  const uniqueClusters = [...new Set(allData.map((item) => item.cluster))];

  // Local state to control when to apply filters
  const [pendingFilters, setPendingFilters] = useState(filters);
  const [pendingSearchTerm, setPendingSearchTerm] = useState(searchTerm);

  // Handle search input change
  const handleSearchChange = (e) => {
    setPendingSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setPendingFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Apply filters when the button is clicked
  const applyFilters = () => {
    dispatch(setSearchTerm(pendingSearchTerm));
    dispatch(setFilters(pendingFilters));
  };

  return (
    <div className="filter-container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Warehouse Name"
        value={pendingSearchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {/* City Filter */}
      <select
        name="city"
        value={pendingFilters.city}
        onChange={handleFilterChange}
        className="filter-select"
      >
        <option value="">Filter by City</option>
        {uniqueCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Cluster Filter */}
      <select
        name="cluster"
        value={pendingFilters.cluster}
        onChange={handleFilterChange}
        className="filter-select"
      >
        <option value="">Filter by Cluster</option>
        {uniqueClusters.map((cluster, index) => (
          <option key={index} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>

      {/* Space Available Filter */}
      <input
        type="number"
        name="spaceAvailable"
        value={pendingFilters.spaceAvailable}
        onChange={handleFilterChange}
        placeholder="Max Space Available"
        className="filter-input"
      />

      {/* Filter Button */}
      <button onClick={applyFilters} className="filter-button">
         Apply Filters
      </button>
    </div>
  );
}

export default WarehouseFilter;
