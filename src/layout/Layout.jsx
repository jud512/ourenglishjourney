
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import './Layout.css'

const Layout = ({user, signOut}) => {
    return(
        <div className="layout">
            <Navbar user={user} signOut={signOut}/>
            <Outlet />
            
        </div>
    )
}

export default Layout;