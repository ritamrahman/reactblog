import React from 'react';
import Sidebar from '../Post/Sidebar/Sidebar';
import './style.css';

function Layout(props) {
  return (
    <div className='layout'>
      {props.children}
      <Sidebar />
    </div>
  );
}

export default Layout;
