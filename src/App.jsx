import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/order/navbar/Navbar'
import Home from './components/pages/order/home/Home'
import Footer from './components/pages/order/footer/Footer'
import About from './components/pages/order/about/About'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/apropos' element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
