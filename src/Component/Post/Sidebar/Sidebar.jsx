import React from 'react';
import Blogpost from '../../../data.json';
import { NavLink } from 'react-router-dom';
import Card from '../../Card/Card';
import './style.css';

function Sidebar(props) {
  const post = Blogpost.data;
  return (
    <div className='sidebar'>
      <Card>
        <div className='recent__post'>
          <h3>Recen Post</h3>
          {post.map((post) => {
            return (
              <NavLink to={`/post/${post.id}`}>
                <h1 className='category__title'>{post.blogTitle}</h1>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default Sidebar;
