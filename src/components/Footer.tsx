import { Link } from "react-router-dom"
import logo from '../assets/kaywaas.png'

const Footer = () => {
  return (
    <div className='py-8 w-full bg-blue-700 mt-20 px-4'>
        <div className='container mx-auto text-white text-left'>
            <div className='flex flex-col md:flex-row md:justify-between items-start'>
                <div >
                    <div className='flex items-center gap-4'>
                        <img src={logo} alt="" className="h-12 w-12"/>
                        <h2 className='text-xl sm:text-2xl md:text-4xl pr-2 md:pr-4 '>Kaywaa Shipping</h2>
                    </div>
                    <div className="mt-8">
                        <span className="text-xs underline">E-mail</span>
                        <p>kaywaashipping@gmail.com</p>
                        <p className="mb-4">brightacolatse@yahoo.com</p>
                        <span className="text-xs underline">Phone</span>
                        <p className="">(+233) 24 703 0292 | (+233) 27 198 4264</p>
                    </div>
                    <div className="mt-8 italic flex flex-col">
                        <p>Sakumono Estate</p>
                        <p>MP-Flat Area - Going to FM</p>
                        <p>Tema - Accra, Ghana</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-8 md:mt-0">
                    <div className='flex'>
                        <h2 className='text-2xl md:text-4xl pr-2 md:pr-4 '>Our Services</h2>
                    </div>
                    <div className="mt-8 space-y-2">
                        <p>Ship Chandelling</p>
                        <p>Oil & Water Bunkering</p>
                        <p>Oil & Ship Broking</p>
                        <p>Ship Maintenance</p>
                        <p>Lubricant Supply</p>
                        <p>Marine Paint Supply</p>
                        <p>Ship Ropes and Wires</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-8 md:mt-0">
                    <div className='flex'>
                        <Link to={"/contact"} className='text-2xl md:text-4xl pr-2 md:pr-4 '>Contact Us</Link>
                    </div>
                    
                </div>
            </div>
            <div className='mt-8 flex items-center justify-between border-t pt-4 flex-col sm:flex-row gap-4'>
                <p className="text-xs">© 2024 Kaywaa Shipping Group. All rights reserved</p>
                <div className='flex gap-8 '>
                    <p className="text-xs">Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
