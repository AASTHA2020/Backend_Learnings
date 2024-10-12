import React, { useState } from 'react';
import Header from './components/Header';
import AddCompanyForm from './components/AddCompanyForm';
import CompanyTable from './components/CompanyTable';
import './App.css';

const App = () => {
  // Initial state for the company data
  const [companies, setCompanies] = useState([
    { name: 'Company 1', email: 'company1@mail.com', contact: '1234567890', address: 'Address 1' },
    { name: 'Company 2', email: 'company2@mail.com', contact: '0987654321', address: 'Address 2' },
    { name: 'Company 3', email: 'company3@mail.com', contact: '1111111111', address: 'Address 3' },
    { name: 'Company 4', email: 'company4@mail.com', contact: '2222222222', address: 'Address 4' },
    { name: 'Company 5', email: 'company5@mail.com', contact: '3333333333', address: 'Address 5' },
    { name: 'Company 6', email: 'company6@mail.com', contact: '4444444444', address: 'Address 6' },
    { name: 'Company 7', email: 'company7@mail.com', contact: '5555555555', address: 'Address 7' },
    { name: 'Company 8', email: 'company8@mail.com', contact: '6666666666', address: 'Address 8' },
    { name: 'Company 9', email: 'company9@mail.com', contact: '7777777777', address: 'Address 9' },
    { name: 'Company 10', email: 'company10@mail.com', contact: '8888888888', address: 'Address 10' },
    { name: 'Company 11', email: 'company11@mail.com', contact: '9999999999', address: 'Address 11' },
    { name: 'Company 12', email: 'company12@mail.com', contact: '1231231231', address: 'Address 12' },
    { name: 'Company 13', email: 'company13@mail.com', contact: '4564564564', address: 'Address 13' },
    { name: 'Company 14', email: 'company14@mail.com', contact: '7897897897', address: 'Address 14' },
    { name: 'Company 15', email: 'company15@mail.com', contact: '9879879879', address: 'Address 15' },
    { name: 'Company 16', email: 'company16@mail.com', contact: '6546546546', address: 'Address 16' },
    { name: 'Company 17', email: 'company17@mail.com', contact: '3213213213', address: 'Address 17' },
    { name: 'Company 18', email: 'company18@mail.com', contact: '1591591591', address: 'Address 18' },
    { name: 'Company 19', email: 'company19@mail.com', contact: '7537537537', address: 'Address 19' },
    { name: 'Company 20', email: 'company20@mail.com', contact: '9519519519', address: 'Address 20' },
  ]);

  // State to track loading status
  const [loading, setLoading] = useState(false);

  // Function to add a new company
  const addCompany = (company) => {
    console.log(company); // Log the form data to the console
    setCompanies([...companies, company]); // Add new company to the state
  };

  // Function to update a company in the table
  const updateCompany = (index, updatedCompany) => {
    const updatedCompanies = companies.map((company, i) =>
      i === index ? updatedCompany : company
    );
    setCompanies(updatedCompanies);
  };

  return (
    <div className="app">
      {/* Show loader when loading is true */}
      {loading && <div className="loader">Loading...</div>}

      {/* Blur content when loading */}
      <div className={loading ? 'blur' : ''}>
        <Header />
        <AddCompanyForm addCompany={addCompany} setLoading={setLoading} />
        <CompanyTable companies={companies} loading={loading} updateCompany={updateCompany} />
      </div>
    </div>
  );
};

export default App;
