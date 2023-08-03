import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector((state) => state.session.user)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)


  const history = useHistory()
  const openMenu = (e) => {
    // debugger
    e.stopPropagation()
    if (showMenu) return;
    setShowMenu(true);
  };


  useEffect(() => {
    // debugger
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };


    // document.addEventListener('click', closeMenu);
  
    // return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  const handeLoginFormModal = () => {
    <LoginFormModal/>
    setShowMenu(false)
  }

  // debugger
return (
  <>
        <button className="profileMenu" onClick={openMenu}>
          <div className="profileContainer">
            <div className="profileIcon">
            <i id="profileBars" className="fa-solid fa-bars"></i>
            <i id="userIcon" className="fa-solid fa-user"></i>

            </div>
              

          </div>
        </button>
    {!currentUser && (
      <>

        {showMenu && (
          <div onClick={(e) => e.stopPropagation()}>
          <ul className="profile-dropdown">
             
            <div>
              <LoginFormModal/>
              <SignupFormModal />
            </div>
        
          </ul>
          </div>
        )}
      </>
    )}

    {currentUser && (
      <>

        {showMenu && (
          <div onClick={(e) => e.stopPropagation()}>
          <ul className="profile-dropdown">
             
            <button id="modalBtn" onClick={() => history.push("/users/reservations/")}>My Trips</button>
            <button id="modalBtn" onClick={logout}>Log Out</button>

          </ul>
          </div>
        )}
      </>
    )}
  </>
);
};

export default ProfileButton;

