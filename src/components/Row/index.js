import React from 'react';
import './styles.css';

// export default function Row({ children: [ left, right ] }) {
export default function Row({ left, right }) {
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
