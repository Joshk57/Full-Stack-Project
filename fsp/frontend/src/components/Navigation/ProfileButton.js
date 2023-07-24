import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector((state) => state.session.user)
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      {/* <button onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button> */}
      <button class="profileMenu" onClick={openMenu}>
        <i id="profileBars" class="fa-solid fa-bars"></i>
        <i id="profileIcon" class="fa-solid fa-user"></i>
      </button>

      
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.email}</li> */}
          <>
          <LoginFormModal />
          <br/>
          <SignupFormModal />
          <br/>
          <button onClick={logout}>Log Out</button>
          </>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;