
/**
 * Represents a square on the game board.
 * Does not contain functionality beyond style.
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
        }}>
            {props.children}
        </div>
    )
}

export default Square;