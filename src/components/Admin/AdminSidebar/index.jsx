import { Link, NavLink } from "react-router-dom";
import { SidebarContainer } from "./AdminSidebar.styled";


const AdminSidebar = () => {
    return (
        <>
            <SidebarContainer>
                <div className=" ">
                    <ul className="d-flex list-unstyled ">
                        <li className="red mx-2">
                            <Link to="/">Admin Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">AddAbout us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="btn btn-primary">Contact</li>
                    </ul>
                </div>
            </SidebarContainer>
        </>
    );
};

export default AdminSidebar;
