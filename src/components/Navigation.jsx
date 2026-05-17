import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-3 ms-5">
            <ul className="nav">
                {navItems.map((item, index) => <NavItem itemTitle={item} key={index}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;