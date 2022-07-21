import React from "react";
import Board from "./Board";

class GameBoard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            rows: props.rows ? props.rows : 10,
            cols: props.cols ? props.cols : 10,
        }
        this.state.board = new Board({rows: this.state.rows, cols: this.state.cols, })
    }

    render() {
        return this.state.board.render()
    }
    
}

export default GameBoard;