import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [institute, setInstitute] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [course, setCourse] = useState('');
  const [instructor, setInstructor] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const apiURL = "http://localhost:8001";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/mark`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age, email, contact, institute, degree, year, course, instructor, duration })
      });

      if (response.ok) {
        setMessage("Added successfully");
        setName("");
        setEmail("");
        setAge("");
        setContact("");
        setInstitute("");
        setDegree("");
        setYear("");
        setCourse("");
        setInstructor("");
        setDuration("");
        setError("");
      } else {
        const errorData = await response.json();
        setError(`Unable to create todo list: ${errorData.message}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-control'
                  />
                </div>
                <div className='form-group col-sm-3'>
                  <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className='form-control'
                  />
                </div>
                <div className='form-group col-sm-3'>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-control'
                  />
                </div>
                <div className='form-group col-sm-3'>
                  <input
                    type="text"
                    placeholder="Contact no"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className='form-control'
                  />
                </div>
              </div>
           

          <div className='row' style={{ marginTop: "30px" }}>
            <div className='panel'>
              <div className='panel-header'>Educational History</div>
            </div>
            <div className='form-group col-sm-4'>
              <select className="form-select" value={institute} onChange={(e) => setInstitute(e.target.value)}>
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
              <select className="form-select" value={degree} onChange={(e) => setDegree(e.target.value)}>
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
              <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
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
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group col-sm-4'>
              <input
                type="text"
                placeholder="Instructor name"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group col-sm-4'>
              <input
                type="text"
                placeholder="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
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
    </>
  );
};

export default Form;
