import React, { useState } from 'react';
import bithitpdf from '.src/components/Navbar/Bithit_Whitepaper.pdf';
import {
    Nav,
    NavLink,
    Bars,
    CloseIcon,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <Nav>
            <CloseIcon onClick={closeSidebar} className={sidebar ? 'active' : 'nav-menu'} />
            <Bars onClick={showSidebar} className={sidebar ? 'active' : 'nav-menu'} />
            <NavMenu className={sidebar ? 'active' : 'nav-menu'}>
                
                <NavLink onClick={closeSidebar} exact to='/'>
                    Home
                </NavLink>
                <NavLink onClick={closeSidebar} as="a" href={bithitpdf} target="_blank">
                    Whitepaper
                </NavLink>
                <NavLink onClick={closeSidebar} to='/howtobuy'>
                    How to Buy
                </NavLink>
                <NavLink onClick={closeSidebar} to='/contact'>
                    Contact
                </NavLink>
                <NavLink onClick={closeSidebar} as="a" href="https://github.com/bithitio" target="_blank">
                    Github
                </NavLink>
            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/'>Connect Meta Mask</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar
