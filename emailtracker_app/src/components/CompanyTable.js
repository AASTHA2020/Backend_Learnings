import React, { useState } from 'react';
import '../styles/CompanyTable.css';

const CompanyTable = ({ companies, loading, updateCompany }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 10;

  const lastIndex = currentPage * companiesPerPage;
  const firstIndex = lastIndex - companiesPerPage;
  const currentCompanies = companies.slice(firstIndex, lastIndex);

  const handleEdit = (index, e) => {
    const { name, value } = e.target;
    const updatedCompany = { ...companies[index], [name]: value };
    updateCompany(firstIndex + index, updatedCompany); // Pass the updated company to the parent function
  };

  return (
    <div className={`company-table ${loading ? 'blur-background' : ''}`}>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Company</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {currentCompanies.map((company, index) => (
            <tr key={index}>
              <td>{firstIndex + index + 1}</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={company.name}
                  onChange={(e) => handleEdit(index, e)}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={company.email}
                  onChange={(e) => handleEdit(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={company.address}
                  onChange={(e) => handleEdit(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="contact"
                  value={company.contact}
                  onChange={(e) => handleEdit(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={lastIndex >= companies.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CompanyTable;
