import {useContext} from "react";
import {PageContext} from "../utils/constants.js";

const NavItem = ({itemTitle}) => {
const {setPage} = useContext(PageContext)
    return (
        <div>
            <li onClick={() => setPage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
        </div>
    );
};

export default NavItem;