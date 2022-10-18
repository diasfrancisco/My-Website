import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div>
        <Introduction />
      </div>
    </div>
  );
}

export default App;
