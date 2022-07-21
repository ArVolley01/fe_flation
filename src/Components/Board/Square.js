import { Unit } from "../Unit";
import { useDrop } from "react-dnd";

/**
 * Represents a square on the game board.
 * 
 * @param {children to put in the square} props 
 * @returns 
 */
const Square = (props) => {

    const [{ isOver }, dropRef] = useDrop({
        accept: 'unit',
        drop: (item) => {
            props.cbf(item)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div style={{
            width: "69px",
            height: "69px",
            border: "1px solid",
            backgroundImage: `url(${props.base})`,
            backgroundSize: "100%, 100%",
            display: "flex",
            placeContent: "center"
        }} ref={dropRef}>
            {props.unit
                ?
                <Unit id={props.unit.id} row={props.unit.row} col={props.unit.col} img={props.unit.img} />
                : !isOver && props.children}
        </div>
    )
}

export default Square;