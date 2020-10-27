import React from 'react';
import Card from '../../Card/Card';
import './style.css';

//Date Show Function Start
var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const currnDate = new Date().toLocaleDateString('en', options);
//Date Show Function End
//Browser Refresh Disable On Click
const onsub = (e) => {
  e.preventDefault();
};
function Topbar(props) {
  return (
    <div>
      <Card id='topBar__Card' background='#FBFBFB' border='1px solid lightgray'>
        <section className='topBar_section '>
          <div className='date'>
            <p>{currnDate}</p>
          </div>

          <div className='socialMedia_Src__Section'>
            <img src={require('../../Assets/Icon/fb.png')} alt='fbicon' />
            <img src={require('../../Assets/Icon/ins.png')} alt='insicon' />
            <img src={require('../../Assets/Icon/tw.png')} alt='twicon' />
            <form onSubmit={onsub}>
              <input type='text' placeholder='search' />
              <img src={require('../../Assets/Icon/src.png')} alt='search' />
            </form>
          </div>
        </section>
      </Card>
    </div>
  );
}

export default Topbar;
