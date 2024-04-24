import React, { useState, ChangeEvent, FormEvent } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    company: '',
    expiryDate: new Date()
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, expiryDate: date })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Add your submission logic here
  }

  return (
    <div>
      <div
        style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '500px', margin: '0 auto' }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Form</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor='name' style={{ display: 'block', color: 'black' }}>
              👤 Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='e.g. John Doe'
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor='phoneNumber' style={{ display: 'block', color: 'black' }}>
              📞 Phone No:
            </label>
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder='Enter phone number'
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor='email' style={{ display: 'block', color: 'black' }}>
              ✉️ Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter email address'
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor='company' style={{ display: 'block', color: 'black' }}>
              🏢 Company:
            </label>
            <input
              type='text'
              id='company'
              name='company'
              value={formData.company}
              onChange={handleChange}
              placeholder='Enter company name'
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <label htmlFor='expiryDate' style={{ display: 'block', color: 'black' }}>
              📅 Expiry Date:
            </label>
            <DatePicker
              selected={formData.expiryDate}
              onChange={handleDateChange}
              minDate={new Date()}
              maxDate={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)}
              dateFormat='MM/dd/yyyy'
              placeholderText='Select a date'
              wrapperClassName='datepicker-wrapper'
              className='datepicker-input'
            />
          </div>
          <button type='submit' style={buttonStyle}>
            📝 Submit
          </button>
        </form>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '11px',
  borderRadius: '3px',
  border: '2px solid #ccc',
  boxSizing: 'border-box' as const // Cast to correct type
}

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: '1px solid #000000',
  borderRadius: '10px',
  padding: '10px 20px',
  cursor: 'pointer',
  transition: 'transform 0.3s, background-color 0.3s', // Adding transition for smoother animation
  marginTop: '10px',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: '1.1rem' // Added margin for better spacing
}

export default App
