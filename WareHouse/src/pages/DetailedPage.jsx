import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateWarehouse } from '../redux-temp/slice'; 


function DetailedPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.warehouses);

  // Find the warehouse based on the ID from the URL
  const singleWarehouse = allData.find((data) => data.id === Number(id));

  // Local state to manage the form values and edit mode
  const [formData, setFormData] = useState(singleWarehouse);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Sync formData with singleWarehouse if it changes
  useEffect(() => {
    setFormData(singleWarehouse || {});
  }, [singleWarehouse]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the update action to Redux
    dispatch(updateWarehouse({ id: singleWarehouse.id, data: formData }));

    // Show success message
    setSuccessMessage('Changes saved successfully!');
    setIsEditing(false); // Switch back to view mode
  };

  // Cancel editing
  const handleCancel = () => {
    setIsEditing(false);
    setFormData(singleWarehouse || {}); // Revert to original data
  };

  return (
    <div className='detailedPage'>
      <div className="warehouse-details">
      <h1>{isEditing ? 'Edit Warehouse Details' : 'Warehouse Details'}</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Warehouse Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Space Available:</label>
            <input
              type="number"
              name="space_available"
              value={formData.space_available || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Type:</label>
            <input
              type="text"
              name="type"
              value={formData.type || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Cluster:</label>
            <input
              type="text"
              name="cluster"
              value={formData.cluster || ''}
              onChange={handleChange}
            />
          </div>
          <div className="buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="details-view">
          <p><strong>Warehouse Name:</strong> {singleWarehouse.name}</p>
          <p><strong>City:</strong> {singleWarehouse.city}</p>
          <p><strong>Space Available:</strong> {singleWarehouse.space_available}</p>
          <p><strong>Type:</strong> {singleWarehouse.type}</p>
          <p><strong>Cluster:</strong> {singleWarehouse.cluster}</p>
          <p><strong>Registered:</strong> {singleWarehouse.is_registered ? 'Yes' : 'No'}</p>
          <p><strong>Live Status:</strong> {singleWarehouse.is_live ? 'Live' : 'Not Live'}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
    </div>

    </div>
    
  );
}

export default DetailedPage;
