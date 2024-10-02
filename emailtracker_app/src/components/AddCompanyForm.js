import React, { useState } from 'react';
import '../styles/AddCompanyForm.css';

const AddCompanyForm = ({ addCompany }) => {
  const [company, setCompany] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCompany(company);
    setCompany({ name: '', email: '', contact: '', address: '' });
  };

  return (
    <div className="add-company-form">
      <button className="add-btn" onClick={() => document.getElementById('popup-form').style.display = 'block'}>Add Company</button>

      <div id="popup-form" className="popup">
        <form onSubmit={handleSubmit}>
          <label>Company Name</label>
          <input type="text" name="name" value={company.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={company.email} onChange={handleChange} required />

          <label>Contact</label>
          <input type="text" name="contact" value={company.contact} onChange={handleChange} required />

          <label>Address</label>
          <input type="text" name="address" value={company.address} onChange={handleChange} required />

          <button type="submit">Submit</button>
          <button type="button" onClick={() => document.getElementById('popup-form').style.display = 'none'}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyForm;
