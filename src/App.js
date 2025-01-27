import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import TimedPageEn from './components/TimedPageEn'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timed-page-es" element={<TimedPageEn />} />
        <Route path="/timed-page-creata" element={<TimedPageEn />} />
        <Route path="/timed-page-en" element={<TimedPageEn />} />
      </Routes>
    </Router>
  )
}

export default App
