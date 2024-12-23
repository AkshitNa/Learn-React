import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='nav-bar'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/clock">Clock</Link></li>
      <li><Link to="/user/1">User 1</Link></li> {/* Link to User with ID 1: http://localhost:3000/user/1 */}
      <li><Link to="/user/2">User 2</Link></li> {/* Link to User with ID 2 */}
      <br /><hr />
    </div>
  )
}

export default Navigation;
