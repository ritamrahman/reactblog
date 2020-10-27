import React from 'react';
import Header from './Component/Header/Header';
import Topbar from './Component/Navebar/Topbar/Topbar';
import './style.css';
import Mainmenu from './Component/Navebar/Main Menu/Mainmenu';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Fashion from './Component/Fashion/Fashion';
import Post from './Component/Post/Post';
import Contact from './Component/Contact/About';
// import Sidebar from './Component/Post/Sidebar/Sidebar';
import Blogpost from './Component/Post/Blogpost/Blogpost';

function App(props) {
  return (
    <div className='app__Main'>
      <div className='app__Center'>
        <Topbar />
        <Header />
        <Mainmenu />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/fashion' component={Fashion}></Route>
          {/* <Route exact path='/post' component={Post}></Route> */}
          <Route exact path='/post/:postid' component={Blogpost}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
