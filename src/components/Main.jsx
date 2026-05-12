import Home from "./Home.jsx";
import {useState} from "react";
import {navItems} from "../utils/constants.js";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";

const Main = ({page}) => {

    switch (page) {
        case navItems[1]:
            return <AboutMe/>
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contacts/>
        default:
            return <Home/>
    }
}

export default Main;