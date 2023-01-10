import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus, FaEdit } from 'react-icons/fa';

import './form.css';

export default function Form({
  handleChange, handleSubmit, newItem, index,
}) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} type="text" value={newItem} />
      <button type="submit">
        {index === -1 ? <FaPlus /> : <FaEdit />}
      </button>
    </form>
  );
}

Form.defaultProps = {
  newItem: '',
  index: -1,
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newItem: PropTypes.string,
  index: PropTypes.number,
};
