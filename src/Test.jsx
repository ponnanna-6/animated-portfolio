import {motion} from "framer-motion"

const Test = () => {
    const items=["pon", "naman", "pappa","dee", "mom"]
    
    return(
        <div className="course">
            <motion.ul 
                initial={{opacity:0}}
                animate={{opacity:1,transition:{staggerChildren: 0.2}}}
            >

                {items.map((item, index)=>(
                    <motion.li 
                initial={{opacity:0}}
                animate={{opacity:1,transition:{staggerChildren: 0.2}}}key={items[index]}>{items[index]}</motion.li>
                ))}
            </motion.ul>
        </div>
    )
}
export default Test;