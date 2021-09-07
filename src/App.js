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
          <div>
              <Switch>
                  <Route path="/">
                      <PokesPage/>
                  </Route>
                  <Route path="/poke/:id">
                      <PokePage/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
