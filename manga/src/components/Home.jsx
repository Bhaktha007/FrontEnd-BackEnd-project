import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/img.1.jpg";
import "../styles/Home.css";
import {motion} from 'framer-motion';
function Home() {
  return (
    <>
    <motion.div className="home" style={{ backgroundImage: `url(${BannerImage})` }}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}   
    >
      <div className="headerContainer">
        <p><h3 className="head1">The Story Keeper</h3></p>
        <p><h3 className="head">Let's Get Lost in the Pages</h3></p>
        <Link to="/list">
          <button> Just Read It!! </button>
        </Link>
      </div>
    </motion.div>
    </>
  );
}

export default Home;