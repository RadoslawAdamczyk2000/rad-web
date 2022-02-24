import React from 'react';
import { motion } from 'framer-motion';
interface IhobbyItem {
    icon : any,
    title : string
}
const HobbyItem = ({icon, title}:IhobbyItem) => {
    return(
        <motion.div
            whileHover={{
                boxShadow:'0 0 1rem hsla(0,100%,100%,.5)',
                scale:1.05
            }}
        >
            <span>
                {icon}
            </span>
            <p>
                {title}
            </p>
        </motion.div>
    )
}

export default HobbyItem;