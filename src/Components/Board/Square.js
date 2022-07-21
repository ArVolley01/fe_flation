import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Unit } from "../Unit";

/**
 * Represents a square on the game board.
 * 
 * @param {children to put in the square} props 
 * @returns 
 */
const Square = (props) => {

    return (
        <div style={{
            width: "69px",
            height: "69px",
            border: "1px solid",
            backgroundImage: `url(${props.base})`,
            backgroundSize: "100%, 100%",
            display: "flex",
            placeContent: "center"
        }} >
        {props.unit 
            ? <DndProvider backend={HTML5Backend}>
                <Unit id={props.unit.id} name={props.unit.name} img={props.unit.img} />
            </DndProvider>
            : props.children}
        </div>
    )
}

export default Square;