import './App.css'
import { Route, Routes } from 'react-router-dom'
import {
  Footer,
  NavBar 
} from './containers'
import {
  Home,
  Art,
  Computing,
  Science,
  About,
  Contact,
  PageNotFound,
  UnderMaintenance,
  FBMarketPlace,
  YouTubeAnalytics
} from './pages'

function App() {
  return (
    <div id="full_page">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="art" element={<UnderMaintenance />} />
        <Route path="science" element={<UnderMaintenance />} />
        <Route path="computing">
          <Route index element={<Computing />} />
          <Route path="fbmp" element={<FBMarketPlace />} />
          <Route path="yt_analytics" element={<YouTubeAnalytics />} />
        </Route>
        <Route path="about" element={<UnderMaintenance />} />
        <Route path="contact" element={<UnderMaintenance />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
