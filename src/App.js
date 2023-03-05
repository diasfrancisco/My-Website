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
  FBMarketPlace
} from './pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="art" element={<UnderMaintenance />} />
        <Route path="science" element={<UnderMaintenance />} />
        <Route path="computing">
          <Route index element={<Computing />} />
          <Route path="fbmp" element={<FBMarketPlace />} />
        </Route>
        <Route path="about" element={<UnderMaintenance />} />
        <Route path="contact" element={<UnderMaintenance />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
