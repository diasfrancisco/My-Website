import "./App.scss";
import { Route, Routes } from "react-router-dom";

import { Art, Computing, Gallery, IntroMessage, Navbar, Science } from './components';
import { ArtInfo, ComputingInfo, ScienceInfo, Footer, Header, Introduction } from './containers'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Header /> } />
        <Route path="/" element={ <Introduction /> } />
      </Routes>
    </>
  );
}

export default App;
