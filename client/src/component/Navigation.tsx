import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navigation: React.FC = () => {
  return (
    <nav className='Navigation'>
      <Link to='/'>Home</Link>
      <div className='cart'>
        <Link to='/register'>cart: ここにカートに入っている個数を表示できるようにする。</Link>
      </div>
    </nav>
  );
}

export default Navigation;