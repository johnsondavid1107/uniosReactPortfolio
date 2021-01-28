import './App.css';
import Portfolio from "./pages/Portfolio"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import PTAG from "./components/PTAG"


function App() {
  const styles = {
    BB: {
      background: "black"
    }
  }
  return (
    <div>
      <div style={styles.BB}>
        <Home />
        {/* <Navbar />
      <Portfolio /> */}
      </div>
      <PTAG />

    </div>

  );
}

export default App;
