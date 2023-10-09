import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/blog" element={<Blog />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
