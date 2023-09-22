import React from 'react';
import "./badge.css";

// Badge component
function Badge({ label }) {
  return (
    <span className="badge">
      {label}
    </span>
  );
}

export default Badge;
