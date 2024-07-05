import React, { useState } from "react";
import "./sidebar.scss"
import {motion} from 'framer-motion'
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () =>{
    const [open, setOpen]= useState(false)
    const variants={
        open:{
            clipPath: "circle(30px at 50px 50px)",
            transition: {

            }
            
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition: {

            }
        }
    }
    return(
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}

export default Sidebar