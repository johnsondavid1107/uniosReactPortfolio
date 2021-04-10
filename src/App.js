import './App.css';
import Home from "./pages/Home.js"
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer"


function App() {

  return (
    <Router>

      <Route exact path="/uniosReactPortfolio/portfolio" component={Portfolio} />
      <Route exact path="/uniosReactPortfolio" component={Home} />



      {/* <Footer /> */}
    </Router>
  );
}

export default App;
