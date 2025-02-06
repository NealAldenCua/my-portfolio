import "react";
import mobile from '../assets/images/mobile.png';
import web from '../assets/images/web.jpg';
import infor from '..//assets/images/infor.png';
import icreate from '../assets/images/icreate.png';

import { SiArduino } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";

const Projects = () =>{
    return(
        <section>
        <h1>Internships</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={infor} alt="exp1"/>
                <div className="project-info">
                    <h2>Infor PSSC Inc. | BGC Taguig</h2>
                    <div className="project-icons">
                        <SiSelenium />
                        <FaJava />
                    </div>
                    <p>Worked as a QA Engineer Intern <span>[09/2022 - 04/2023]</span>. Developed and executed comprehensive test cases for software applications.
                     Has the change to learn some automation. Created detailed documentation to guide the automation setup process</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="project-card">
                <img src={icreate} alt="exp2"/>
                <div className="project-info">
                    <h1> iCreate Cafe | Fisher Mall, Quezon City</h1>
                    <div className="project-icons">
                        <TbBrandMinecraft />
                    </div>
                    <p>An internsip during SHS <span>[03/2019 - 05/2019]</span> where I and other shs members developed educational code in Minecraft Education, engaging young
                    students in coding.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

        </div>

        <h1>Projects</h1>

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
                    {/* <a href="#">Read More</a> */}
                </div>
            </div>

            <div className="project-card">
                <img src={web} alt="proj2"/>
                <div className="project-info">
                    <h1>Materials (BillofMaterials)</h1>
                    <div className="project-icons">
                        <FaReact />
                        <IoLogoFirebase />
                    </div>
                    <p>A web-based freelance and commisson project. Digitalization of inputting
                        data to excel. Created with React and Firebase as Database. 
                        <a href="https://billofmaterials.vercel.app/" target="_blank">Here</a>
                        </p>
                    {/* <a href="#">Read More</a> */}
                </div>
            </div>

            <div className="project-card">
                <img src={web} alt="proj3"/>
                <div className="project-info">
                    <h1>TechGizmo</h1>
                    <div className="project-icons">
                        <FaReact />
                        <IoLogoFirebase />
                    </div>
                    <p>
                        A simple mobile phone product e-commerce website project created in PHP and XAMPP PhpMyAdmin as its database.
                        Learned about integration of the database with PHP. 
                    </p>
                    {/* <a href="#">Read More</a> */}
                </div>
            </div>

            <div className="project-card">
                <img src={web} alt="proj4"/>
                <div className="project-info">
                    <h1>STU.A.R.T</h1>
                    <div className="project-icons">
                        <FaReact />
                        <IoLogoFirebase />
                    </div>
                    <p>
                       A SHS project to help students better manage their time efficiently. Created with c#.
                    </p>
                    {/* <a href="#">Read More</a> */}
                </div>
            </div>

        </div>
        </section>
    );
}
export default Projects;