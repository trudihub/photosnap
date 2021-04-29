import Home from "./components/Home"
import Stories from "./components/Stories"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/stories" component={Stories}/>
        <Route exact path="/features" component={Features}/>
        <Route exact path="/pricing" component={Pricing}/>
      </Switch>
    </Router>
  );
}

export default App;
