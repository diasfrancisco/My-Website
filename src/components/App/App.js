import "./App.css";
import Navbar from "../Navbar/Navbar";
import Introduction from "../Introduction/Introduction";
import Gallery from "../Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div id="mainPage">
        <Introduction />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
