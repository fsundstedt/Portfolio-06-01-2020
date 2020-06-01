import React from 'react';
import pdf from "../Resume-Frank-Sundstedt.pdf";
import { CenterA, NavbarItem, NavbarNav, NavbarPosition } from './styled.js';

function Nav() {
  return (
    <>
      <NavbarPosition>
        <NavbarNav role="navigation" aria-label="main navigation" style={navbarStyle}>
          <div className="navbar-start">
            <CenterA href={pdf} download target="_blank">
                  <NavbarItem>Download Resume</NavbarItem>
            </CenterA>
          </div>
        </NavbarNav>
      </NavbarPosition>
    </>
  );
}

const navbarStyle = {
  background: "orangered",
};


export default Nav;
