
const NavBar = () => {
    return (
        <div style={{display: "flex", margin:"20px", flexDirection:"row", placeContent:"space-evenly"}}>
            <button key="button1" style={{ width: "300px" }}>Cool Button</button>
            <button key="button2" style={{ width: "300px" }}>Cool Button 2</button>
            <button key="button3" style={{ width: "300px" }}>Cool Button 3</button>
        </div>
    )
}

export default NavBar;