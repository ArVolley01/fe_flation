import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: props.rows,
            cols: props.cols,
            squares: [],
            units: [],
        }
        for (let i = 0; i < this.state.rows; i++) {
            this.state.squares.push([]);
            this.state.units.push([])
            for (let j = 0; j < this.state.cols; j++) {
                this.state.units[i].push("")
                this.state.squares[i].push({back: "grasstile.png"});
            }
        }
    }

    changeUnit(row, col, unit = null) {
        let newUnits = this.state.units
        newUnits[row][col] = unit
        this.setState({
            units: newUnits
        })
    }

    render() {
        return (
            <div style={{
                display: "grid",
                gridTemplateRows: `repeat(${this.state.rows}, 70px)`,
                gridTemplateColumns: `repeat(${this.state.cols}, 70px)`,
                justifyContent: "center",
            }}>
                {this.state.squares.map((element, row) => {
                    return element.map((el, col) => {
                        return (
                            <Square unit={this.state.units[row][col]} base={el.back} key={`[${row}][${col}]`}>
                                {`${row}, ${col}`}
                            </Square>
                        )
                    })
                })}
            </div>
        )
    }
}

export default Board;