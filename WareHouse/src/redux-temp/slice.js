// src/redux-temp/slice.js
import { createSlice } from '@reduxjs/toolkit';
import data from '../data'; 

const warehouseSlice = createSlice({
  name: 'warehouses',
  initialState: {
    allData: [...data],
    filteredData: [...data],
    searchTerm: '',
    filters: {
      city: '',
      cluster: '',
      spaceAvailable: '',
    },
  },
  reducers: {
    setWarehouses: (state, action) => {
      state.allData = action.payload;
      state.filteredData = applyFiltersAndSearch(state.allData, state.filters, state.searchTerm);
    },
    updateWarehouse: (state, action) => {
      const index = state.allData.findIndex((wh) => wh.id === action.payload.id);
      if (index !== -1) {
        state.allData[index] = { ...state.allData[index], ...action.payload.data };
        state.filteredData = applyFiltersAndSearch(state.allData, state.filters, state.searchTerm);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = applyFiltersAndSearch(state.allData, state.filters, state.searchTerm);
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredData = applyFiltersAndSearch(state.allData, state.filters, state.searchTerm);
    },
  },
});

// Function to apply search and filters
const applyFiltersAndSearch = (data, filters, searchTerm) => {
  return data.filter((warehouse) => {
    const matchesCity = filters.city ? warehouse.city === filters.city : true;
    const matchesCluster = filters.cluster ? warehouse.cluster === filters.cluster : true;
    const matchesSpaceAvailable = filters.spaceAvailable ? warehouse.space_available <= filters.spaceAvailable : true;
    const matchesName = warehouse.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCity && matchesCluster && matchesSpaceAvailable && matchesName;
  });
};

export const { setWarehouses, updateWarehouse, setSearchTerm, setFilters } = warehouseSlice.actions;
export default warehouseSlice.reducer;
