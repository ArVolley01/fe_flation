import GameBoard from "./Board/GameBoard";

class MapOne extends GameBoard {

    componentDidMount() {
        this.setState({
            board: this.state.board.changeUnit(3, 4, {
            id: 1,
            row: 3,
            col: 4,
            img: "flower.png",
        })
    })
    }
}

export default MapOne