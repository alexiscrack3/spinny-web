import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Players } from "./containers/Players";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
