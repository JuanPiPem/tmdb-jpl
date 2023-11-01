import { Route, Routes } from "react-router-dom";
import "./App.css";
// import axios from "axios";
import Register from "./components/Register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
