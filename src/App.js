import './App.css';
import GameBoard from './Components/Board/GameBoard'
import NavBar from './Components/NavBar';

const App = () => {

  return (
    <div>
      <header style={{textAlign: "center"}}>FE Flatiron</header>
      <NavBar />
      <GameBoard />
    </div>
  )
}

export default App;
