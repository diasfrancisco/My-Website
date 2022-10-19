import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Art, Computing, Gallery, IntroMessage, Navbar, Science } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
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
      </Routes>
    </>
  );
}

export default App;
