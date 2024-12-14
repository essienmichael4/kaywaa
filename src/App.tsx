import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/gallery' element={<Gallery />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
