import React from 'react';
import logo from '../../assets/image.png';
import Nav from '../nav/index.tsx';
import Button from '../button/index.tsx';

const Header = () => {

    const navItems = [{name: "Home", href: "google.com"}, {name: "Portfolio", href: "google.com"}, {name: "About me", href: "google.com"}]
  
    return (
        <div className="border border-[#0065ff33] flex flex-row justify-between items-center px-8 top-0 right-0 left-0 w-full fixed bg-[#fff] shadow-md">
            
            <img src={logo} width={"180px"} alt="Minha Figura"/>
            <Nav items={navItems}/>

            <Button text='Contact US' onClick={() => console.log()} variant='secondary'/>
        </div>
);
};

export default Header;