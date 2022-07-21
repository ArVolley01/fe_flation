import './App.css';
import GameBoard from './Components/Board/GameBoard'
import NavBar from './Components/NavBar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import MapOne from './Components/MapOne';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GameBoard />} />
          <Route path="/MapOne" element={<MapOne />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
