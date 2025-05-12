import React from "react";
import { motion } from "framer-motion";
// import myPic from '../assets/my-pic.png';
import '../styles/Home.css';
import downloadIcon from '../assets/download.png';

const Home = () => {

    // handle downloading my resume
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'mostafa-zamani-cv.pdf';
        link.click();
    };

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
            <div className="home-container">
                {/* Left section */}
                <section className="left-sec">
                <motion.h1
                    whileHover={{ y: -10, scale: 1.1, color: "#454545" }}  
                    transition={{ type: "spring", stiffness: 300 }}
                >
                {"Hi, this is Mo...".split("").map((char, index) => (
                    <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    >
                    {char}
                    </motion.span>
                ))}
                </motion.h1>

                <p> Join me on this unforgettable journey.</p>

                <h2>View My Professional Background</h2>
                <button onClick={handleDownloadResume} className="download-pdf">
                <img src={downloadIcon} alt="Download icon" style={{ width: "20px", marginRight: "10px" }} />
                    Get My Resume
                </button>
                </section>

                {/* Right section */}
                <section className="right-sec">
                <div className="skills-section">
                    <h3>Skills</h3>
                    <hr className="skills-divider" />
                    <div className="skill-icons">
                    <i className="devicon-react-original colored" title="React"></i>
                    <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                    <i className="devicon-html5-plain colored" title="HTML5"></i>
                    <i className="devicon-css3-plain colored" title="CSS3"></i>
                    <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
                    <i className="devicon-git-plain colored" title="Git"></i>
                    <i className="devicon-csharp-plain colored" title="C#"></i>
                    <i className="devicon-java-plain colored" title="java"></i>
                    </div>
                </div>
                </section>
            </div>

        </motion.div>
    )
}

export default Home;