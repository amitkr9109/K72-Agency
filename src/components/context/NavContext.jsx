import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NavbarContext = createContext();
export const NavTextColorChangeContext = createContext();

const NavContext = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false);
  const [navColorChange, setNavColorChange] = useState("white");

  const location = useLocation().pathname

  useEffect(() => {
    if(location === "/projects" || location === "/agence") {
      setNavColorChange("black");
    }
    else{
      setNavColorChange("white");
    }
  })

  return (
    <>
      <NavbarContext.Provider value={[ navOpen, setNavOpen ]}>
        <NavTextColorChangeContext.Provider value={[navColorChange, setNavColorChange]}>
          {children}
        </NavTextColorChangeContext.Provider>
      </NavbarContext.Provider>
    </>
  )
}

export default NavContext