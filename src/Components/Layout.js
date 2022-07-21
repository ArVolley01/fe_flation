import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
        <header style={{ textAlign: "center" }}>FE Flatiron</header>
        <NavBar />
        <Outlet />
        </>
    )
};

export default Layout;