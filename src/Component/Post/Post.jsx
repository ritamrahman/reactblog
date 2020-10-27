import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Blogpost from './Blogpost/Blogpost';
import './style.css';
// import Card from '../Card/Card';

function Post(props) {
  console.log(props);

  return (
    <div className='Post__Section'>
      <Blogpost />

      <Sidebar />
    </div>
  );
}

export default Post;
