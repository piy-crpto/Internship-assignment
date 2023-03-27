import React from "react";
import "./Navbar.css";
import { useState } from "react";
// import {Link} from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // const[isMobile,setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* <div className="logo"><img src="Images/img2.jpeg" alt="logo" srcset="" / ></div> */}
          <Link exact to="/" className="nav-logo">
            Logo
            <i className="fas fa-code"></i>
          </Link>
          {/* <ul className={isMobile? "nav-links-mobile" :
    "nav-links"}
    onClick={()=>setIsMobile(false)}
    > */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              {" "}
              <Link
                to="#home5"
                className="homes nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              {" "}
              <Link
                to="#about5"
                className="about nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Programs
              </Link>{" "}
            </li>

            <li className="nav-item">
              {" "}
              <Link
                to="#services5"
                className="services nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Working
              </Link>{" "}
            </li>

            <li className="nav-item">
              {" "}
              <Link
                to="#philosophy5"
                className="philosophy nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Philosophy
              </Link>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <Link
                to="#program-working"
                className="program-working nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Program-Working
              </Link>{" "}
            </li>

            <li className="nav-item">
              {" "}
              <Link
                to="#teams5"
                className="teams nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Teams
              </Link>{" "}
            </li>


            <li className="nav-item">
              {" "}
              <Link
                to="#contact5"
                className=" nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Contact
              </Link>{" "}
            </li>

            {/* <li className="nav-item">
              {" "}
              <Link
                to="#contact5"
                className="nav-links"
                activeClassName="active"
                onClick={handleClick}
                smooth
              >
                Contact
              </Link>{" "}
            </li> */}
          </ul>
          {/* <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button> */}

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             CodeBucks
//             <i className="fas fa-code"></i>
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
