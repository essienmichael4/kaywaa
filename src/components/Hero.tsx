import hero1 from "../assets/hero1.jpeg"
import hero2 from "../assets/hero2.jpeg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
        {/* <p className="mb-8 text-[#FF9D00] text-sm font-bold">WE’VE GOT YOU COVERED</p> */}
        <h1 className="text-4xl font-bold sm:font-normal sm:text-6xl lg:text-7xl text-center tracking-wide relative">
          Fueling Your  <span className="text-blue-700 bg-clip-text relative">Voyage</span>, Powering Your <span className="text-blue-700 bg-clip-text relative"><span className="z-10">Success</span> </span>
        </h1>

        <p className="mt-10 text-center text-md text-neutral-500 max-w-4xl">We specialize in providing top-quality marine fuel and exceptional bunkering services tailored to meet your vessel's needs. With a commitment to efficiency, safety, and reliability, we ensure smooth operations for every journey. Partner with us for unmatched expertise and support, wherever the seas take you.</p>
        <Link to={"/contact"} className='text-white bg-blue-700 py-3 px-8 rounded-md mt-8'>
              Contact Us
            </Link>
        <div className="flex justify-center mt-10 mb-4 lg:w-[80%]">
            <img src={hero1} alt="" className="rounded-lg aspect-video w-1/2 border border-blue-700 shadow shadow-blue-400 mx-2"/>
            <img src={hero2} alt="" className="rounded-lg w-1/2 border border-blue-700 shadow shadow-blue-400 mx-2"/>
        </div>
    </div>
  )
}

export default Hero
