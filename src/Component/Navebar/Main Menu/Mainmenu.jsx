import React from 'react';
import Card from '../../Card/Card';
import { NavLink } from 'react-router-dom';
import './style.css';

function Mainmenu() {
  return (
    <div className='main_menu'>
      <Card id='main_menu__Section' height='60px' background='#2D2D2D'>
        <ul>
          <li className='nav-item'>
            <NavLink
              exact
              activeClassName='menu_active'
              className='nav-link active'
              aria-current='page'
              to='/'
            >
              Home
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              exact
              activeClassName='menu_active'
              className='nav-link active'
              aria-current='page'
              to='/about'
            >
              About Us
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              exact
              activeClassName='menu_active'
              className='nav-link active'
              aria-current='page'
              to='/fashion'
            >
              Fashion
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              exact
              activeClassName='menu_active'
              className='nav-link active'
              aria-current='page'
              to='/post'
            >
              Post
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              exact
              activeClassName='menu_active'
              className='nav-link active'
              aria-current='page'
              to='/contact'
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default Mainmenu;
