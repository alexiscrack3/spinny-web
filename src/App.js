import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Players } from "./containers/Players";
import { Home } from "./containers/Home";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
