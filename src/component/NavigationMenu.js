import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationMenu.css';

const menuItems = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

function NavigationMenu() {
  return (
    <nav>
      {menuItems.map((item, index) => (
        <NavLink key={index} to={item.url} activeClassName="active">
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationMenu;
