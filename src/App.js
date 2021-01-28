import './App.css';
import Portfolio from "./pages/Test"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./components/Projects"


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
      <Projects />

    </div>

  );
}

export default App;
