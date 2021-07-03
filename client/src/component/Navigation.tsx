import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation: React.FC = () => {
  return (
    <nav className='Navigation'>
      <Link to='/'>Home</Link>
      <div className='cart'>
        <Link to='/register'>
          <FontAwesomeIcon icon='shopping-cart' />
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;