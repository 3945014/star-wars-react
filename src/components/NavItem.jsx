const NavItem = ({itemTitle, changePage}) => {

    return (
        <div>
            <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
        </div>
    );
};

export default NavItem;