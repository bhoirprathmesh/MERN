import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

function AdminLayout() {
    const { user, isLoading } = useAuth();
    console.log("admin layout ", user);

    // // Handle loading state
    // if (isLoading) {
    //     return <h1>Loading ...</h1>;
    // }

    // Ensure user exists before checking isAdmin
    // if (!user || !user.isAdmin) {
    //     return <Navigate to="/" />;
    // }

    return (
      <>
        <header className="admin-header">
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/users">
                                <FaUser /> Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/contacts">
                                <FaMessage /> Contacts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/services">
                                <FaRegListAlt /> Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <FaHome /> Home
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
      </>
    );
}

export default AdminLayout;
