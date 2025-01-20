import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import clsx from 'clsx'; // Import clsx
import classes from './styles.module.css';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import logo from '../../assets/images/logo.png';
import { LINKS } from '../../data';
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    // State for sidebar
    const [isOpen, setIsOpen] = useState(false);
    const openSidebar = () => setIsOpen(true);
    const closeSidebar = () => setIsOpen(false);

    // State for dark mode
    const [isDark, setIsDark] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme === 'dark' : true;
    });

    const toggleTheme = () => {
        setIsDark(prevIsDark => {
            const newTheme = !prevIsDark;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    useEffect(() => {
        document.body.className = isDark ? classes.darkMode : classes.lightMode;
    }, [isDark]);

    return (
        <header>
            <div className={classes.navbar}>
                {/* Logo */}
                <div className="logo">
                    <NavLink to='/'>
                        <img src={logo} alt="logo" style={{ height: 50, width: 50 }} />
                    </NavLink>
                </div>

                {/* Links */}
                <div className={clsx(classes.links, { [classes.toggleTheme]: isDark })}>
                    {LINKS.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            className={({ isActive }) => isActive ? classes.activeLink : ''}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* Checkbox for theme toggle */}
                    <div className={classes.toggleContainer}>
                        <input 
                            type="checkbox"
                            id="check"
                            className={classes.toggle}
                            onChange={toggleTheme}
                            checked={isDark}
                        />
                        <label htmlFor="check"></label>
                    </div>
                </div>

                {/* Hamburger menu */}
                <div className={classes.menuButton} onClick={openSidebar}>
                    <MenuIcon size={30} />
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
        </header>
    );
};

export default Header;
