// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import * as sessionActions from '../../store/session';
// import LoginFormModal from "../LoginFormModal";
// import SignupFormModal from "../SignupFormModal";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const [showMenu, setShowMenu] = useState(false);
//   const currentUser = useSelector((state) => state.session.user)
//   const [showLoginModal, setShowLoginModal] = useState(false)
//   const [showSignupModal, setShowSignupModal] = useState(false)


//   const history = useHistory()
//   const openMenu = (e) => {
//     e.stopPropagation()
//     if (showMenu) return;
//     setShowMenu(true);
//   };


//   // useEffect(() => {
//   //   if (!showMenu) return;
//   //   const closeMenu = () => {
//   //     if (showMenu)
//   //     setShowMenu(false);
//   //   };


//   //   document.addEventListener('click', closeMenu);
  
//   //   return () => document.removeEventListener("click", closeMenu);
//   // }, [showMenu]);
//   useEffect(() => {
//     const closeMenuOnClick = (e) => {
//       if (showMenu && !e.target.closest('.profile-dropdown')) {
//         setShowMenu(false);
//       }
//     };
  
//     document.addEventListener('click', closeMenuOnClick);
  
//     return () => {
//       document.removeEventListener('click', closeMenuOnClick);
//     };
//   }, [showMenu]);
  
  
//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//     setShowMenu(false)
//     history.push("/")
//   };

//   const handleLoginFormModal = () => {
//     <LoginFormModal/>
//     setShowMenu(false)
//   }
//   const closeMenuOnClick = () => {
//     setShowMenu(false);
//   };

// return (
//   <>
  
//         <button className="profileMenu" onClick={openMenu}>
//           <div className="profileContainer">
//             <div className="profileIcon">
//             <i id="profileBars" className="fa-solid fa-bars"></i>
//             <i id="userIcon" className="fa-solid fa-user"></i>

//             </div>
              

//           </div>
//         </button>

//     {!currentUser && (
//       <>

//         {showMenu && (
//           <div>
//           <ul className="profile-dropdown">
             
//             <div> 
//               <LoginFormModal/>
//               <SignupFormModal/>
//             </div>
        
//           </ul>
//           </div>
//         )}
//       </>
//     )}

//     {currentUser && (
//       <>

//         {showMenu && (
//           <div onClick={(e) => e.stopPropagation()}>
//           <ul className="profile-dropdown">
             
//             <button className="modalBtn" onClick={() => {history.push("/users/reservations/"); setShowMenu(false)}}>My Trips</button>
//             <button className="modalBtn" onClick={logout}>Log Out</button>

//           </ul>
//           </div>
//         )}
//       </>
//     )}
//   </>
// );
// };

// export default ProfileButton;





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
    e.stopPropagation()
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = (e) => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    
    document.addEventListener('click', closeMenu);
    
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  
  
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  const handleLoginFormModal = () => {
    setShowLoginModal(true)
    setShowMenu(false)
  }
  const handleSignupFormModal = () => {
    setShowSignupModal(true)
  }
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

    {showMenu && !currentUser && (
      
      
      <ul className="profile-dropdown">
            <>
             
            <div> 
              <button className="modalBtn" onClick={handleLoginFormModal}>Log In</button>
              <button className="modalBtn" onClick={handleSignupFormModal}>Sign Up</button>
            </div>
        
            </> 
          </ul>

    )}

    {showLoginModal && <LoginFormModal closeModal={() => setShowLoginModal(false)}/>}
    {showSignupModal && <SignupFormModal closeModal={() => setShowSignupModal(false)}/>}

    {currentUser && (
      <>

        {showMenu && (
          <div onClick={(e) => e.stopPropagation()}>
          <ul className="profile-dropdown">
             
            <button className="modalBtn" onClick={() => {history.push("/users/reservations/"); setShowMenu(false)}}>My Trips</button>
            <button className="modalBtn" onClick={logout}>Log Out</button>

          </ul>
          </div>
        )}
      </>
    )}
  </>
);
};

export default ProfileButton;

