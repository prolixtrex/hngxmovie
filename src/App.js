import Main from "./Main";
import MoviePage from "./MoviePage";
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/movies/:id" Component={MoviePage} />
      </Routes>
    </div>
  );
}

export default App;
