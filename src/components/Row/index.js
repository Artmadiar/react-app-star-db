import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// export default function Row({ children: [ left, right ] }) {
function Row({ left, right }) {
  return (
    <div className="appBody">
      <div className="left">
        {left}
      </div>
      <div className="right">
        {right}
      </div>
    </div>
  );
}

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Row;
