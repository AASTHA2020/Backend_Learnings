import React, { useState } from 'react';
import Header from './components/Header';
import AddCompanyForm from './components/AddCompanyForm';
import CompanyTable from './components/CompanyTable';

import './App.css';

const App = () => {
  
  const [companies, setCompanies] = useState([
    { name: 'Company 1', email: 'company1@mail.com', contact: '1234567890', address: 'Address 1' },
    { name: 'Company 2', email: 'company2@mail.com', contact: '0987654321', address: 'Address 2' },
    { name: 'Company 3', email: 'company3@mail.com', contact: '1234567893', address: 'Address 3' },
    { name: 'Company 4', email: 'company4@mail.com', contact: '1234567894', address: 'Address 4' },
    { name: 'Company 5', email: 'company5@mail.com', contact: '1234567895', address: 'Address 5' },
    { name: 'Company 6', email: 'company6@mail.com', contact: '1234567896', address: 'Address 6' },
    { name: 'Company 7', email: 'company7@mail.com', contact: '1234567897', address: 'Address 7' },
    { name: 'Company 8', email: 'company8@mail.com', contact: '1234567898', address: 'Address 8' },
    { name: 'Company 9', email: 'company9@mail.com', contact: '1234567899', address: 'Address 9' },
    { name: 'Company 10', email: 'company10@mail.com', contact: '12345678910', address: 'Address 10' },
    { name: 'Company 11', email: 'company11@mail.com', contact: '12345678911', address: 'Address 11' },
    { name: 'Company 12', email: 'company12@mail.com', contact: '12345678912', address: 'Address 12' },
    { name: 'Company 13', email: 'company13@mail.com', contact: '12345678913', address: 'Address 13' },
    { name: 'Company 14', email: 'company14@mail.com', contact: '12345678914', address: 'Address 14' },
    { name: 'Company 15', email: 'company15@mail.com', contact: '12345678915', address: 'Address 15' },
    { name: 'Company 16', email: 'company16@mail.com', contact: '12345678916', address: 'Address 16' },
    { name: 'Company 17', email: 'company17@mail.com', contact: '12345678917', address: 'Address 17' },
    { name: 'Company 18', email: 'company18@mail.com', contact: '12345678918', address: 'Address 18' },
    { name: 'Company 19', email: 'company19@mail.com', contact: '12345678919', address: 'Address 19' },
    { name: 'Company 20', email: 'company20@mail.com', contact: '12345678920', address: 'Address 20' },
  ]);

  // Pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 10;

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  
  // Current companies 
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);

  
  const nextPage = () => {
    if (currentPage < Math.ceil(companies.length / companiesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Add a new company
  const addCompany = (company) => {
    console.log(company); 
    setCompanies([...companies, company]);
  };

  return (
    <div className="app">
      <Header />
      <AddCompanyForm addCompany={addCompany} />
      
      <CompanyTable companies={currentCompanies} />

      
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(companies.length / companiesPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
