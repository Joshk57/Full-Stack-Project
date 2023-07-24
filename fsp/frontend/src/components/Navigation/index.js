import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';

function Navigation(){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    // <ul>
    //   <li>
    //     <NavLink exact to="/">Home</NavLink>
    //     {sessionLinks}
    //   </li>
    // </ul>
    <div className='nav'>
        <div id='logo'>
            <li>
                <NavLink exact to="/">Home</NavLink>
                {sessionLinks}
            </li>

    </div>
  
    <ul id="nav-list">
      <li>
        <br></br><br></br>
        <ProfileButton />
        <br></br><br></br>
      </li>
    </ul>
  </div>
  );
}

export default Navigation;