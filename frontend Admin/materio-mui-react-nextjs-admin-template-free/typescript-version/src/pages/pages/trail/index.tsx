import React from 'react'

interface HistoryProps {
  formData: FormData
}

const History: React.FC<HistoryProps> = ({ formData }) => {
  // Render table rows dynamically from form data
  const renderRows = () => {
    if (!formData) return null // Check if formData is defined

    return (
      <tr>
        <td>name</td>
        <td>phoneNumber</td>
        <td>email</td>
        <td>company</td>
        <td>expiryDate.toString()</td> {/* You may need to format this date properly */}
      </tr>
    )
  }

  return (
    <div>
      <h2>History</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Phone Number</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Company</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Expiry Date</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  )
}

export default History
