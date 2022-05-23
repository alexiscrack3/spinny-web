import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Players } from "./containers/Players";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
