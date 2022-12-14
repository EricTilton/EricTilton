import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'


import './App.scss'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
           <Route path="/portfolio" element={<Portfolio />} /> 
           <Route path="/skills" element={<Skills />} /> 
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
