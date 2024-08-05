import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './List.css';

const StudList = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState('');
  const apiURL = "http://localhost:8001";
  const navigate = useNavigate();  

  const getItem = async () => {
    try {
      const response = await fetch(`${apiURL}/mark`);
      if (!response.ok) {
        const errorMsg = await response.text();
        setError(`Unable to fetch items: ${errorMsg}`);
        return;
      }
      const data = await response.json();
      setTodo(data);
    } catch (err) {
      setError(`Error fetching items: ${err.message}`);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); 
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await fetch(`${apiURL}/mark/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const errorMsg = await response.text();
          setError(`Unable to delete item: ${errorMsg}`);
          return;
        }
        getItem();
      } catch (err) {
        setError(`Error deleting item: ${err.message}`);
      }
    }
  };

  return (
    <div className='full-screen-container'>
      {error && <p className='error-message'>{error}</p>}
      <table className='full-screen-table table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Contact no</th>
            <th>Duration</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {todo.map((item) => (
            <tr key={item._id}> 
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.contact}</td>
              <td>{item.duration}</td>
              <td>
                <button onClick={() => handleEdit(item._id)} className='btn btn-primary'>Edit</button>
                <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudList;
