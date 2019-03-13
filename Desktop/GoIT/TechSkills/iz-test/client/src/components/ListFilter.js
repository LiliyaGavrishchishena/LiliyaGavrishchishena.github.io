import React from 'react';

const ListFilter = ({ name, city, email, phone, onFilterChange }) => (
  <>
    <input
      type="text"
      name="name"
      value={name}
      onChange={onFilterChange}
      placeholder="Name"
    />
    <br />
    <input
      type="text"
      name="city"
      value={city}
      onChange={onFilterChange}
      placeholder="City"
    />
    <br />
    <input
      type="text"
      name="email"
      value={email}
      onChange={onFilterChange}
      placeholder="Email"
    />
    <br />
    <input
      type="text"
      name="phone"
      value={phone}
      onChange={onFilterChange}
      placeholder="Phone"
    />
  </>
);

export default ListFilter;
