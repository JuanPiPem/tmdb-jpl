import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/userContext";

import Register from "./components/Register/Register";
import Movies from "./components/Home/Movies";
import Body from "./components/Home/Body";

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/movies" element={<Body />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
