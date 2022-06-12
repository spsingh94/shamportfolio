import React, { useState, useEffect } from "react";

export function navbarJS(section) {
    const [navbarBg, setNavbarBg] = useState("initial");
    
    useEffect(() => {
      const onScroll = () => changeNavbarBg(window.pageYOffset);
    
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    // Checks and sets navbar-data attribute to true or false to change background color of navbar as needed.
    const changeNavbarBg = (offset) => setNavbarBg(offset >= (section.current.offsetTop - 100) ? "black" : "unset");
  
    return navbarBg;
  }