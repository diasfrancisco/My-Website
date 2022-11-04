import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Footer, Header } from './containers'
import {
  Home,
  Art,
  Computing,
  Science,
  About,
  Contact,
  PageNotFound,
  UnderMaintenance,
} from './pages'

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="art" element={<UnderMaintenance />} />
        <Route path="science" element={<UnderMaintenance />} />
        <Route path="computing" element={<UnderMaintenance />} />
        <Route path="about" element={<UnderMaintenance />} />
        <Route path="contact" element={<UnderMaintenance />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
