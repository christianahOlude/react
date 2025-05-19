import { Outlet } from "react-router"
import Header from "../Header/header"
import SideBar from "../sideBar/SideBar"
import NowPlaying from "../movies/NowPlaying"
import Footer from "../footer/Footer"
import style from "./layout.module.css"

const Layout=()=>{
    return(
        <>
        <div className={style.layOutWrapper}>
            <Header/>
            <div className={style.sideBarOutLet}>
                <SideBar/>
                <Outlet/>
                <NowPlaying/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Layout;