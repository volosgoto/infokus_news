import React from 'react';
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/" className="nav-link">
        <i className="fas fa-home" /> Home
      </Link>
    </div>
  )
}
