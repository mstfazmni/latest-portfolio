import React from "react";
import { motion } from "framer-motion";
import myPic from '../assets/my-pic.png';
import '../styles/Home.css';

const Home = () => {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
            <div className="home-container">
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
                </section>

                <section className="right-sec">
                <motion.img 
                src={myPic} 
                alt="myPic" 
                className="my-pic"
                initial={{ scale: 0.8, opacity: 0 }}  
                animate={{ scale: 1, opacity: 1 }}  
                whileHover={{ scale: 1.1, rotate: 3 }}  
                transition={{ duration: 0.3 }}  
                />
                    {/* <img src={myPic} alt="myPic" className="my-pic"></img> */}
                </section>
            </div>

        </motion.div>
    )
}

export default Home;