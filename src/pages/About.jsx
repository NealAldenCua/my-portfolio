import "react";
import Typewriter from "typewriter-effect";
import avatar from '../assets/images/avatar.png';
import { SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { HiDocumentCheck } from "react-icons/hi2";
import f1 from '../assets/images/f1.png';
import keyboard from '../assets/images/keyboard.png';

const About = () =>{
    return(
        <section>
            <div className="about-me">
                <div className="about-me-content">
                    <h4><Typewriter options ={{
                        strings:['Who Am I?', 'Get to Know Me!'],
                        autoStart: true,
                        loop: true,
                        cursor: '_'
                    }}/></h4>

                  <div className="about-me-layout">
                      <img src={avatar} alt="avatar" className="avatar"/>
                      <div className="card">
                          <p>
                              Graduated from Informations and Communications Academy <span>[iACADEMY]</span> in Makati, 
                              holding a degree in Bachelor of Science in Computer Science with specialization in Software Engineering <span>[BSSCSE]</span>.
                              Another degree in Bachelor of Science in Information Technology with specialization in Web Development <span>[BSITWD]</span>.
                              I am a passionate and detail-oriented Software Engineer and Quality Assurance Engineer with hands-on experience in developing and testing web applications, mobile apps, and integrated hardware solutions. Adept in both front-end and back-end technologies, with a proven ability to lead projects from conception to completion.
                          </p>
                      </div>
                  </div>
                </div>
            </div>
            
            <div className="tools-title">
                <h1>Tools and technology that I have been taking recently</h1>
                
                <div className="tools">
                    <div><SiIntellijidea /><span>IntelliJ</span></div>
                    <div><VscVscode /><span>Visual Studio Code</span></div>
                    <div><FaHtml5 /><span>HTML</span></div>  
                    <div><FaCss3 /><span>CSS</span></div>
                    <div><SiSelenium /><span>Selenium</span></div>
                    <div><IoLogoFirebase /><span>Firebase</span></div>  
                    <div><FaGithub /><span>Github</span></div>
                    <div><IoLogoFigma /><span>Figma</span></div>
                    <div><SiCanva /><span>Canva</span></div>
                    <div><SiXampp /><span>XAMPP</span></div>
                    <div><HiDocumentCheck /><span>Manual Testing</span></div>
                </div>
            </div>

            <div className="hobbies-interest">
                <h1>My hobbies and interest right now...</h1>

                <div className="ihcard">
                    <div className="imgBox-hi">
                        <img src={f1} alt="f1"/>
                    </div>
                    <div className="description-hi">
                        <h1>Formula 1</h1>
                        <p>A casual enjoyer of Formula 1. It is nothing 
                            but an &apos;inchident&apos;... a smart and intellectual man once
                            said.
                        </p>
                    </div>
                </div>
                <div className="ihcard">
                    <div className="imgBox-hi">
                        <img src={keyboard} alt="keyboard"/>
                    </div>
                    <div className="description-hi">
                        <h1>Keyboards</h1>
                        <p>Building keyboard is nothing but fun. The sound it produces
                            is soothing... except for clicky switches!
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default About;