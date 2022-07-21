import GameBoard from "./Board/GameBoard";
import { Unit } from "./Unit";

class MapOne extends GameBoard {
    constructor({props}) {
        super({...props, rows: 11, cols: 11})
        this.load()
    }

    load() {
        this.state.board.changeUnit(3, 4, {
            id: 1,
            name: "flower",
            img: "flower.png",
        })
    }
}

export default MapOne