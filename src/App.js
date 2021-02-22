import {
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Result from "./Pages/Result";
function App() {
  return (
    <div>
     <Navbar />
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/result" component={Result} />
          </Switch>
    </div>
  );
}

export default App;
