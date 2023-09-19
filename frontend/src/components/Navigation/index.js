// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
// import './Navigation.css';
// import SignupFormModal from '../SignupFormModal';
// import SearchBar from './SearchBar';

// function Navigation(){
//   // const sessionUser = useSelector(state => state.session.user);

//   // let sessionLinks;
//   // if (sessionUser) {
//   //   sessionLinks = (
//   //     <ProfileButton user={sessionUser} />
//   //   );
//   // } else {
//   //   sessionLinks = (
//   //     <>
//   //       <LoginFormModal />
//   //       <SignupFormModal />
//   //     </>
//   //   );
//   // }

//   return (

  
//     <div className='nav'>


//       <div id='navbar'>
//               <NavLink className="app-logo" exact to="/"><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"></img>
              
//               {/* <span id="cheapbnb">cheapbnb</span> */}
//               </NavLink>
//       </div>
//       <div className="nav-list">
//       <SearchBar />
//       {/* <input id='searchbar' type="text" placeholder="Search..."></input> */}
//           {/* <br></br><br></br> */}
//           <ProfileButton />
//           {/* <br></br><br></br> */}
//       </div>
//     </div>
//   );
// }

// export default Navigation;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import SearchBar from './SearchBar';

function Navigation() {
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
    <div className='nav'>
      <div id='navbar' className="nav-container">
        <div className="nav-list">
          <NavLink className="app-logo" exact to="/">
            {/* <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Logo"></img> */}
            <div className="logo-wrapper">
            <img id="logo" src="https://cdn.usbrandcolors.com/images/logos/airbnb-logo.svg" alt="logo"></img>
            <span id="budgetbnb">budgetbnb</span>
              
            </div>
          </NavLink>
        </div>
        <div>
          
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div>
          <a href='https://www.linkedin.com/in/joshua-kim-jk/' target='_blank'><img id="linkedin"
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/>

          </a>
        </div>
        <div>
        <a href="https://github.com/Joshk57/Full-Stack-Project" target='_blank'><img id="myGithub" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715"/>
      </a>
        </div>
        <div className="profile-btn">
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
