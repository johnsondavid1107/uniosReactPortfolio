import './App.css';
import Navbar from "./components/Navbar"
import Portfolio from "./pages/Portfolio"
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
        <Portfolio />
        {/* <Navbar />
      <Portfolio /> */}
      </div>
      <Projects />

    </div>

  );
}

export default App;
