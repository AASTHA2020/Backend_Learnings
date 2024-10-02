import React, { useState } from 'react';
import '../styles/CompanyTable.css';

const CompanyTable = ({ companies }) => {
    return (
      <div className="company-table">
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Company</th>
              <th>Mail ID</th>
              <th>Address</th>
              <th>Contact Details</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{company.name}</td>
                <td>{company.email}</td>
                <td>{company.address}</td>
                <td>{company.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default CompanyTable;
