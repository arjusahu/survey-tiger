import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
