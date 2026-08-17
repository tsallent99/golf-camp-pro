import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CampDetail from './pages/CampDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/camp/summer-performance" element={<CampDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
