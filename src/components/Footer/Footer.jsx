import classes from './styles.module.css';
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        //copyright
        <div className={classes.copyright}>
            <p>&copy; {currentYear} Neal Alden Cua. All rights reserved.</p>
        </div>
    );
}

export default Footer;