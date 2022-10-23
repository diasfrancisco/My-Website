import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Footer, Header } from './containers'
import {
  Home,
  Art,
  Computing,
  Science,
  PageNotFound,
  UnderMaintenance,
} from './pages'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="art" element={<Art />} />
      <Route path="science" element={<Science />} />
      <Route path="computing" element={<Computing />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
