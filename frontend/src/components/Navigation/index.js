import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';

function Navigation(){
  // const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <SignupFormModal />
  //     </>
  //   );
  // }

  return (

    // <ul>
    //   <li>
    //     <NavLink exact to="/">Home</NavLink>
    //     {sessionLinks}
    //   </li>
    // </ul>
  
    <div className='nav'>
      <div id='navbar'>
              <NavLink exact to="/"><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"/></NavLink>
              {/* {sessionLinks} */}
      </div>


      <ul id="nav-list">
      <input id='searchbar' type="text" placeholder="Search..."></input>
          {/* <br></br><br></br> */}
          <ProfileButton />
          {/* <br></br><br></br> */}
      </ul>
    </div>
  );
}

export default Navigation;