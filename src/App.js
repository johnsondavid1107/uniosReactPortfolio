import './App.css';
import Home from "./pages/Home.js"
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  const styles = {
    BB: {
      background: "black"
    }
  }
  return (
    <Router>
      <Navbar />
      <div style={styles.BB}>

        {/* <div style={styles.BB}>
        <Portfolio />
      </div> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/uniosReactPortfolio/portfolio" component={Portfolio} />
        <Route exact path="/uniosReactPortfolio" component={Home} />


      </div>
      <Footer />
    </Router>
  );
}

export default App;
