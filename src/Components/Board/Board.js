import React from "react";
import Square from "./Square";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checknum: 0,
            rows: props.rows,
            cols: props.cols,
            squares: [],
            units: [],
        }
        for (let i = 0; i < this.state.rows; i++) {
            this.state.squares.push([]);
            this.state.units.push([])
            for (let j = 0; j < this.state.cols; j++) {
                this.state.units[i].push()
                this.state.squares[i].push({back: "grasstile.png"});
            }
        }
    }

    changeUnit(row, col, unit) {
        console.log("here", row, col, unit)
        let newUnits = this.state.units
        newUnits[row][col] = {...unit, row: row, col: col}
        this.setState({
            checknum: this.state.checknum+1,
            units: newUnits
        })
        return this
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
                            <DndProvider backend={HTML5Backend}>
                            <Square cbf={(u) => {this.changeUnit(row, col, u)}} unit={this.state.units[row][col]} base={el.back} key={`[${row}][${col}]`}>
                                {`${row}, ${col}`}
                            </Square>
                            </DndProvider>
                        )
                    })
                })}
                <h1>{this.state.checknum}</h1>
            </div>
        )
    }
}

export default Board;