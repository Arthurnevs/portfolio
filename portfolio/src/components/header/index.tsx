import React from 'react';
import logo from '../../assets/image.png';
import Nav from '../nav/index.tsx';
import Button from '../button/index.tsx';

const Header = () => {

    const navItems = [{id: "1", name: "Home", href: "google.com"}, {id: "2", name: "Portfolio", href: "google.com"}, {id: "3", name: "About me", href: "google.com"}]
  
    return (
        <div className="border border-[#0065ff33] flex flex-row justify-between items-center px-8 top-0 right-0 left-0 w-full fixed bg-[#fff] shadow-md invisible md:visible">
            
            <img src={logo} width={"180px"} alt="Minha Figura"/>
            <Nav items={navItems}/>

            <Button text='Contact US' onClick={() => console.log()} variant='secondary'/>
        </div>
);
};

export default Header;