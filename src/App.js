import './App.css';
import PokesPage from "./pages/pokesPage";
import PokePage from "./pages/pokePage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/">
                <PokesPage/>
            </Route>
            <Route path="/poke/:id" children={<PokePage />}/>
        </Switch>
      </Router>
  );
}

export default App;
