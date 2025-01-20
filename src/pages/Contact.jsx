import React from "react";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () =>{
    return(
        <section>
            <div className="contact-title">
                <h4>You can contact me through gmail or send me a sms.</h4>
                
                <div className="contact-me">
                    <div><SiGmail /><span>neal.cua@gmail.com</span></div>
                    <div><FaPhoneAlt /><span>09154961123</span></div>
                </div>
            </div>
        </section>
    );
}
export default Contact;