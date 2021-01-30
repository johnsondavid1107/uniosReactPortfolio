import './App.css';
import Home from "./pages/Home.js"
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
      {/* <div style={styles.BB}>
        <Portfolio />
      </div> */}
      <Home />


    </div>

  );
}

export default App;
