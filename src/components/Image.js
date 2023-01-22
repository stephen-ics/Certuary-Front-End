import { wrap } from "framer-motion";
import { useEffect, useState } from "react"


// import Logo from "../public/logo-transparent.png";

import { GoThreeBars } from "react-icons/go";

import {
    Link,
    useLocation
} from "react-router-dom";



const Image = ({ CID }) => {

    return (
                //{pathname ? opacity:0 : opacity:1}
        <img src={`https://cf-ipfs.com/ipfs/${CID}`}/>
    )
}

export default Image;