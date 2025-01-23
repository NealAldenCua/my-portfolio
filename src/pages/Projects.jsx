import "react";
import mobile from '../assets/images/mobile.png';
import web from '../assets/images/web.jpg';

import { SiArduino } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Projects = () =>{
    return(
        <section>
        <h1>Projects | Experiences</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={mobile} alt="proj1"/>
                <div className="project-info">
                    <h2>SegroBot</h2>
                    <div className="project-icons">
                        <SiArduino />
                        <FaJava />
                    </div>
                    <p>An automated segregating smart trash bin paired with a mobile
                        application. Created with Arduino <span>[hardware]</span> and
                        Android Studio<span> [mobile]</span>.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="project-card">
                <img src={web} alt="proj2"/>
                <div className="project-info">
                    <h1>BillofMaterials</h1>
                    <div className="project-icons">
                        <FaReact />
                        <IoLogoFirebase />
                    </div>
                    <p>A web-based freelance and commisson project. Digitalization of inputting
                        data to excel. Created with React and Firebase as Database. 
                        <a href="https://billofmaterials.vercel.app/" target="_blank">Here</a>
                        </p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="project-card">
                <img src={web} alt="proj3"/>
                <div className="project-info">
                    <h1>BillofMaterials</h1>
                    <div className="project-icons">
                        <FaReact />
                        <IoLogoFirebase />
                    </div>
                    <p>
                        sdf
                    </p>
                    <a href="#">Read More</a>
                </div>
            </div>

        </div>
        </section>
    );
}
export default Projects;