import {Routes,Route, NavLink} from 'react-router-dom'
import Home from './component/Home'
import Support from './component/Support'
import About from './component/About'
import Contact from './component/Contact'
import NotFound from './component/NotFound'
import MainHeader from './component/MainHeader'

function App() {

  return (
    <div className=""> 
        <nav className='w-full h-[70px]'>
          <ul className='flex flex-row justify-around'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Support">Support</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li> <NavLink to="/Contact">Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App
