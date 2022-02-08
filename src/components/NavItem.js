function NavItem() {
    return(
        <ul className="nav-item text-pink text-lg text-opacity-60 flex justify-center space-x-10 py-10 font-semibold">
            <li>
                <a className="text-lg text-opacity-60 font-semibold">Profile</a>
                </li>
            <li>
                <a className="text-lg text-opacity-60 font-semibold">Skills</a>
                </li>
            <li>
                <a className="text-lg text-opacity-60 font-semibold">Project</a>
                </li>
            <li>
                <a className="text-lg text-opacity-60 font-semibold">Contact</a>
                </li>
        </ul>
    );
}
export default NavItem;