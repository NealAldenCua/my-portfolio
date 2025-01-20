import React from "react";
import face from '../assets/images/me.png';
import resume from '../assets/resume/Cua, Neal Alden Resume.pdf';
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () =>{
    return(
        <section>
        <img src={face} alt="me" className="me"/>
        <div className="content-hero">
            <div className="contentBox-hero">
                <h4><Typewriter options ={{
                    strings:['Greetings!', 'Hi There!', 'It is Nice to See You!'],
                    autoStart: true,
                    loop: true,
                    cursor: '_'
                }}/></h4>

                <h2>I'm <span>Neal Alden Cua</span></h2>
                <h3>Quality Assurance Engineer | Software Engineer</h3>
                <p>I am a Quality Assurance Engineer with a keen eye for detail and a passion for creating and testing innovative solutions. 
                    Let's connect and have a great conversation!</p>
                
                {/* Link to About page */}
                 <NavLink to='/about'>
                    About Me
                </NavLink>

                <a href= {resume} download= 'cua, neal_resume'>Download CV</a>
            </div>
        </div>
        </section>
    );
}
export default Home;