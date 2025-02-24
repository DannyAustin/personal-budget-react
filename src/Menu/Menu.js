import React from 'react';
import '../App.css';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <div>
    <nav
        role="navigation"
        aria-label="Main Menu"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
    >
        <ul>
            <li><Link itemProp="url" to="/">Home</Link></li>
            <li><Link itemProp="url" to="/about">About</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
        </ul>
    </nav>
    </div>
  );
}

export default Menu;
