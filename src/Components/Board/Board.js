import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: props.rows ? props.rows : 1,
            cols: props.cols ? props.cols : 1,
            squares: [],
        }
        for (let i = 0; i < this.state.rows; i++) {
            this.state.squares.push([]);
            for (let j = 0; j < this.state.cols; j++) {
                this.state.squares[i].push("Empty");
            }
        }
    }

    render() {
        return (
            <div style={{
                display: "grid",
                gridTemplateRows: `repeat(${this.state.rows}, 70px)`,
                gridTemplateColumns: `repeat(${this.state.cols}, 70px)`,
                justifyContent: "center",
            }}>
                {this.state.squares.map((element, index) => {
                    return element.map((el, ind) => {
                        return (
                            <Square key={`[${index}][${ind}]`}>
                                <p style={{overflow:"auto"}}>{el}</p>
                            </Square>
                        )
                    })
                })}
            </div>
        )
    }
}

export default Board;