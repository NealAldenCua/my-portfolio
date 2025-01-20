import classes from './styles.module.css';
import {IoClose as CloseIcon} from 'react-icons/io5';
import { NavLink } from "react-router-dom";
import {LINKS} from '../../data';
import React, { useState, useEffect } from "react";

const Sidebar = ({isOpen, closeSidebar}) =>{
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

    const currentYear = new Date().getFullYear(); // Get the current year
    return(
        <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
            <span className={classes.closeIcon} onClick={closeSidebar}>
                <CloseIcon size={20}/>
            </span>
            
            {/* links */}
            <div className={classes.links}>
                {
                    LINKS.map((link)=> (
                        <NavLink 
                            key={link.name}
                            to={link.to}  
                            className={({ isActive }) => isActive ? classes.activeLink : ''} onClick={closeSidebar}>
                            {link.name}
                        </NavLink>
                    ))
                }

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

            {/* Copyright */}
            <div className={classes.copyright}>
                <p>&copy; {currentYear} Neal Alden Cua. All rights reserved.</p>
            </div>
        </div>
    );
}
export default Sidebar;