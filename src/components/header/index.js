import React from 'react';
import './styles.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
      <button type="button" className="btn btn-primary btn-sm" onClick={onServiceChange} >Update Context</button>
    </div>
  );
};


export default Header;
