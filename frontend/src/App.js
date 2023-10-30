import "./App.css";
import axios from "axios";
function App() {
  const pedidoAMiApi = () => {
    axios.get("http://localhost:3001/api").then((respuesta) => {
      console.log(respuesta.data);
    });
  };

  return (
    <div>
      <h1>Holass mundo</h1>

      <button onClick={pedidoAMiApi}>Pedido</button>
    </div>
  );
}

export default App;
