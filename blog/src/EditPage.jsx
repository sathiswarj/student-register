import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Form.css';

const EditPage = () => {
  const { id } = useParams();
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editContact, setEditContact] = useState('');
  const [editInstitute, setEditInstitute] = useState('');
  const [editDegree, setEditDegree] = useState('');
  const [editYear, setEditYear] = useState('');
  const [editCourse, setEditCourse] = useState('');
  const [editInstructor, setEditInstructor] = useState('');
  const [editDuration, setEditDuration] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const apiURL = "http://localhost:8001";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${apiURL}/mark/${id}`);
        if (!response.ok) {
          const errorMsg = await response.text();
          setError(`Unable to fetch item: ${errorMsg}`);
          return;
        }
        const data = await response.json();
        setEditName(data.name || '');
        setEditAge(data.age || '');
        setEditEmail(data.email || '');
        setEditContact(data.contact || '');
        setEditInstitute(data.institute || '');
        setEditDegree(data.degree || '');
        setEditYear(data.year || '');
        setEditCourse(data.course || '');
        setEditInstructor(data.instructor || '');
        setEditDuration(data.duration || '');
      } catch (err) {
        setError(`Error fetching item: ${err.message}`);
      }
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/mark/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editName,
          age: editAge,
          email: editEmail,
          contact: editContact,
          institute: editInstitute,
          degree: editDegree,
          year: editYear,
          course: editCourse,
          instructor: editInstructor,
          duration: editDuration,
        }),
      });
      if (!response.ok) {
        const errorMsg = await response.text();
        setError(`Unable to update item: ${errorMsg}`);
        return;
      }
      setMessage('Item updated successfully');
      setTimeout(() => navigate('/list'), 2000);
    } catch (err) {
      setError(`Error updating item: ${err.message}`);
    }
  };

  return (
    <div className='container'>
    {message && <p>{message}</p>}
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <div className='row' style={{ marginBottom: "30px" }}>
        <div className='card'>
          <div className='card-body'>
            <div className='panel'>
              <div className='panel-header'>Personal Information</div>
            </div>
            <div className='form-group col-sm-3'>
              <input
                type="text"
                placeholder="Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group col-sm-3'>
              <input
                type="text"
                placeholder="Age"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group col-sm-3'>
              <input
                type="text"
                placeholder="Email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group col-sm-3'>
              <input
                type="text"
                placeholder="Contact no"
                value={editContact}
                onChange={(e) => setEditContact(e.target.value)}
                className='form-control'
              />
            </div>
          </div>
       

      <div className='row' style={{ marginTop: "30px" }}>
        <div className='panel'>
          <div className='panel-header'>Educational History</div>
        </div>
        <div className='form-group col-sm-4'>
          <select className="form-select" value={editInstitute} onChange={(e) => setEditInstitute(e.target.value)}>
            <option value="">Institutions attended</option>
            <option value="JFK">JFK</option>
            <option value="DEL">DEL</option>
            <option value="SYD">SYD</option>
            <option value="BOM">BOM</option>
            <option value="BNE">BNE</option>
            <option value="BLR">BLR</option>
          </select>
        </div>
        <div className='form-group col-sm-4'>
          <select className="form-select" value={editDegree} onChange={(e) => setEditDegree(e.target.value)}>
            <option value="">Degrees earned</option>
            <option value="JFK">JFK</option>
            <option value="DEL">DEL</option>
            <option value="SYD">SYD</option>
            <option value="BOM">BOM</option>
            <option value="BNE">BNE</option>
            <option value="BLR">BLR</option>
          </select>
        </div>
        <div className='form-group col-sm-4'>
          <select className="form-select" value={editYear} onChange={(e) => setEditYear(e.target.value)}>
            <option value="">Year of attendance</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      </div>

      <div className='row'>
        <div className='panel'>
          <div className='panel-header'>Enrolled Courses</div>
        </div>
        <div className='form-group col-sm-4'>
          <input
            type="text"
            placeholder="Course name"
            value={editCourse}
            onChange={(e) => setEditCourse(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group col-sm-4'>
          <input
            type="text"
            placeholder="Instructor name"
            value={editInstructor}
            onChange={(e) => setEditInstructor(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group col-sm-4'>
          <input
            type="text"
            placeholder="Duration"
            value={editDuration}
            onChange={(e) => setEditDuration(e.target.value)}
            className='form-control'
          />
        </div>
      </div>

      <div className='form-group col-sm-12'>
        <button type="submit" className='btn btn-success'>Submit</button>
      </div>


      </div>
      </div>
    </form>
  </div>
  );
};

export default EditPage;
