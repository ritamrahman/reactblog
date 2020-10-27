import React, { useEffect, useState } from 'react';
import Blogdata from '../../../data.json';
import Card from '../../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import './style.css';
function Blogpost(props) {
  const [post, setPost] = useState({
    id: '',
    blogCategory: '',
    blogTitle: '',
    slug: '',
    postedOn: '',
    author: '',
    blogImage: '',
    blogText: '',
  });
  useEffect(() => {
    const postId = props.match.params.postid;
    const posts = Blogdata.data.find((post) => post.id == postId);
    setPost(posts);
  });
  if (post.blogImage == '') return null;

  return (
    <div className='blog__post'>
      <Card width='68%' border='1px solid red'>
        <h3>{post.blogCategory}</h3>
        <h1>{post.blogTitle}</h1>
        <h6>{post.postedOn}</h6>
        <img
          className='post__image'
          src={require(`../../Assets/Images/${post.blogImage}`)}
          alt='post image'
        />
        <p>{post.blogText}</p>
      </Card>

      {/* <Card width='30%'> */}
      <Sidebar />
      {/* </Card> */}
    </div>
  );
}

export default Blogpost;
