import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div style={{display: "flex", margin:"20px", flexDirection:"row", placeContent:"space-evenly"}}>
            <Link to="/"> Home </Link>
            <Link to="/MapOne"> Map 1</Link>
        </div>
    )
}

export default NavBar;