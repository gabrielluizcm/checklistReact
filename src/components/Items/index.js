import React from 'react';
import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './items.css';

export default function Items({ handleEdit, handleDelete, items }) {
  return (
    <ul className="items">
      {items.map((item, itemIndex) => (
        <li key={item}>
          {item}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, itemIndex)} className="edit" />
            <FaWindowClose onClick={(e) => handleDelete(e, itemIndex)} className="delete" />
          </span>
        </li>
      ))}
    </ul>
  );
}

Items.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
