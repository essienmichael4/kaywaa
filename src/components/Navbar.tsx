import { useState } from 'react'
import logo from '../assets/kaywaas.png'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-100/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className='h-10 w-10 mr-2' />
            <span className="text-lg md:text-xl tracking-tight">Kaywaa Shipping</span>
          </Link>
          <div className="hidden lg:flex justify-center items-center space-x-4">
            {/* <ul className="hidden lg:flex mr-14 space-x-12">
              <li>
                <Link to={"/gallery"} className='text-neutral-500'>Gallary</Link>
              </li>
            </ul> */}
            {/* <p>(+233) 24 366 0662</p> */}
            <Link to={"/contact"} className='text-white bg-blue-700 py-2 px-3 rounded-md'>
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobileDrawerOpen && 
          <div className="fixed right-0 z-20 w-full bg-white backdrop-blur-lg p-12 flex flex-col justify-center items-center lg:hidden">
            {/* <ul>
              <li className='py-4'>
                <Link to={"/gallery"}>Gallery</Link>
              </li>
            </ul> */}
            <div className="flex-col sm:flex-row flex space-x-6 items-center">
              <p className='py-2 px-3 rounded-md sm:border mb-2 sm:mb-0'>
              (+233) 24 366 0662
              </p>
              <Link to={"/contact"} className='text-white bg-blue-700 py-2 px-3 rounded-md'>
                Contact Us
              </Link>
            </div>
          </div>
        }
      </div>

    </nav>
  )
}

export default Navbar
