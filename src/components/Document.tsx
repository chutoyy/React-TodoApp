import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import Navbar from "./Navbar"

function Document(){
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Document