import { Route, Routes } from "react-router-dom";
import "./App.css";

import Register from "./components/Register/Register";
import Movies from "./components/Home/Movies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
