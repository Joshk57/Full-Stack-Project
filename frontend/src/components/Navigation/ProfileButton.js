import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector((state) => state.session.user)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  

  const openMenu = (e) => {
    // debugger
    e.stopPropagation()
    if (showMenu) return;
    setShowMenu(true);
  };

  // const openMenu = (e) => {
  //   e.stopPropagation()
  //   setShowMenu(true)
  // }

  // const closeMenu = () => {
  //   setShowMenu(false)
  // }
  // const openLoginModal = () => {
  //   setShowLoginModal(true)
  // }
  // const closeLoginModal = () => {
  //   setShowLoginModal(false)
  // }

  // const openSignupModal = () => {
  //   setShowSignupModal(true)
  // }

  // const closeSignupModal = () => {
  //   setShowSignupModal(false)
  // }
  
  useEffect(() => {
    // debugger
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
  const menuClick = (e) => {
    e.stopPropagation()
  }

  // debugger
return (
  <>
        <button className="profileMenu" onClick={openMenu}>
          <i id="profileBars" className="fa-solid fa-bars"></i>
          <i id="profileIcon" className="fa-solid fa-user"></i>
        </button>
    {!currentUser && (
      <>

        {showMenu && (
          <div onClick={menuClick}>
          <ul className="profile-dropdown">
             
          <div>
            <LoginFormModal />
            <SignupFormModal />

          </div>
       
     
              {/* <li>
                <button onClick={openLoginModal}>Login</button>
              </li>
              <li>
                <button onClick={openSignupModal}>Sign Up</button>
              </li>
              <li>
                <button onClick={logout}>Log Out</button>
              </li> */}
          </ul>
          </div>
        )}
      </>
    )}

    {currentUser && (
      <>

        {showMenu && (
          <div onClick={menuClick}>
          <ul className="profile-dropdown">
             
          <button id="modalBtn" onClick={logout}>Log Out</button>

       
     
              {/* <li>
                <button onClick={openLoginModal}>Login</button>
              </li>
              <li>
                <button onClick={openSignupModal}>Sign Up</button>
              </li>
              <li>
                <button onClick={logout}>Log Out</button>
              </li> */}
          </ul>
          </div>
        )}
      </>
    )}
    {/* {showLoginModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeLoginModal}>
            &times;
          </span>
          <LoginFormModal />
        </div>
      </div>
    )} */}

    {/* {showSignupModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeSignupModal}>
            &times;
          </span>
          <SignupFormModal />
        </div>
      </div>
    )} */}
  </>
);
};
// }

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const [showMenu, setShowMenu] = useState(false);
//   // const currentUser = useSelector((state) => state.session.user)
  
//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };


  
//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = () => {
//       setShowMenu(false);
//     };

//     document.addEventListener('click', closeMenu);
  
//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//   };

//     return (
//       <>

//         <button className="profileMenu" onClick={openMenu}>
//           <i id="profileBars" className="fa-solid fa-bars"></i>
//           <i id="profileIcon" className="fa-solid fa-user"></i>
//         </button>
  
        
//         {showMenu && (
//           <ul className="profile-dropdown">
//             <>
//             <LoginFormModal />
//             <br/>
//             <SignupFormModal />
//             <br/>
//             <button onClick={logout}>Log Out</button>
//             </>
//           </ul>
//         )}
//       </>
//     );


// }
export default ProfileButton;