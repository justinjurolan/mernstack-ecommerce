import React, { useState } from 'react';

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((price, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        value={`${price._id}`}
        name={price}
        type="radio"
        className="mr-2 ml-4"
      />
      <label className="form-check-label">{price.name}</label>
    </div>
  ));
};

export default RadioBox;
