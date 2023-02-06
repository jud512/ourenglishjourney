
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import './Layout.css'

const Layout = ({user}) => {
    return(
        <div className="layout">
            <Navbar user={user}/>
            <Outlet />
            
        </div>
    )
}

export default Layout;