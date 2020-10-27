import React from 'react';
import Layout from '../Layout/Layout';
import Card from '../Card/Card';
import './style.css';

function Home(props) {
  return (
    <div>
      <div className='hero__div'>
        <div className='top_hero__section'>
          <div className='top_hero__img'>
            <img
              src={require('../Assets/Images/beautiful-&-simple.jpg')}
              alt='hero img'
            />
          </div>

          <div className='top_hero__img'>
            <img
              src={require('../Assets/Images/cestovat-chladny-dno-jednoduchost-2868847.jpg')}
              alt='hero img'
            />
          </div>
        </div>
        <div className='bottom_hero__section'>
          <div className='bottom_hero__img'>
            <img
              src={require('../Assets/Images/fitness-blog-post.jpg')}
              alt='hero img'
            />
          </div>

          <div className='bottom_hero__img'>
            <img
              src={require('../Assets/Images/memories-from.jpg')}
              alt='hero img'
            />
          </div>
          <div className='bottom_hero__img'>
            <img
              src={require('../Assets/Images/affection-baby-baby-girl-beautiful-377058.jpg')}
              alt='hero img'
            />
          </div>
        </div>
      </div>

      <Layout>
        <Card>
          <h1>This is home</h1>
        </Card>
      </Layout>
    </div>
  );
}

export default Home;
