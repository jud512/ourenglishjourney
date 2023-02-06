import React, { useEffect, useRef, useState } from "react";
// import { linksHU } from "../../data/dataNavLinks";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";


import "./Navbar.css";

const Navbar = ({isPassedToWithAuthenticator, signOut, user}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
        id:1,
        url: '/',
        name: 'Home'
    },
    {
        id:2,
        url: '/learnwithwords',
        name: 'practice with words'
    },
    {
        id:3,
        url: '/learnwithdesc',
        name: 'practice with description'
    },
  ]

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isOpen && isToggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isOpen]);

  const handleResize = () => {
    if (window.innerWidth < 1080) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
    // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <p className="logo">My English Journey</p> 
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => handleToggle()}
          >
            <FaAlignJustify className="nav-icon" />
          </button>
        </div>
        <div className="nav-links-container" ref={linksContainerRef}>
          <ul
            className={isOpen ? "nav-links show-nav" : "nav-links"}
            ref={linksRef}
          >
            {/* {links.map((link) => {
              return (
                <li key={link.id} onClick={() => handleToggle()}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              );
            })} */}
            {/* <li className="btnVocab">           
              <Link to='/listvocab' style={{padding:'0'}}>List Vocabulary</Link>
           </li>
            <li className="btnVocab">           
              <Link to='/createnewvocab' style={{padding:'0'}}>Create Vocabulary</Link>
           </li> */}
            <li className="btnSignOut">           
              <button onClick={signOut}>Sign out</button>
           </li>
           <li>
              <div className="personalInfo">
                   
                    <div className="imgContainer">
                      <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>    
                     <p>{user}</p>        
                  </div>
           </li>
          </ul>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
