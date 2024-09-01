import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import detailedPage from './pages/DetailedPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' Component={Home} />
          <Route path='/details/:id' Component={detailedPage} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
