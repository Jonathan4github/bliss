import React from 'react';
import { NavLink } from 'react-router-dom';
import chevronIcon from '../../icons/chevron-left.svg';
import Nav from './navbar.style';

const Navbar = ({backNav}) => {
  const logoUrl = 'https://static.apiary.io/assets/1lqsC4I4.png';

  return (
    <Nav>
      <NavLink className="logo" to="/">
        {
          backNav ? 
          (<><img src={chevronIcon} alt="back navigation" /> Back to question list</>) : 
          (<img src={logoUrl} alt="bliss logo" />)
        }
      </NavLink>
    </Nav>
  )
}

export default Navbar;
