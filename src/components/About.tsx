// import video1 from "../assets/video1.mp4"
import chandelling from "../assets/chandelling.jpeg"
import water from "../assets/water.jpeg"
import oil from "../assets/oil.jpg"
import map from "../assets/map 1.png"
import oilbroking from "../assets/oilbroking.jpg"
import shipbroking from "../assets/shipbroking.jpg"
import lubricant from "../assets/lubricant.jpg"
import maintenance from "../assets/maintenance.jpg"
import painting from "../assets/painting.jpg"
import ropes from "../assets/ropes.jpg"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
        <div className="mt-20 px-4 sm:px-6 relative border-b border-neutral-100/80 min-h-[800px]">
            <div className="flex flex-col items-center text-center mt-10">
                <span className="text-blue-700 rounded-full text-lgm font-medium px-2 py-1 uppercase">Why Choose Us</span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 tracking-wide">
                    Get ready to benefit from
                </h3>
                <div className="flex w-full flex-wrap justify-between rounded-lg py-8 px-8 mt-4 lg:mt-10">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                        <div className="flex flex-col items-center">
                            <h3 className="text-7xl text-blue-700">15+</h3>
                            <p className="">Years Experience</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                        <div className="flex flex-col items-center">
                            <h3 className="text-7xl text-blue-700">20%</h3>
                            <p className="">Cheaper Cost</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col items-center">
                            <h3 className="text-7xl text-blue-700">4.9</h3>
                            <p className="">Satisfaction Acheived</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-16 tracking-wide">
                    We deliver a complete range of shipping services
                </h2>
                <div className="mt-12 flex flex-wrap">
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={chandelling} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Ship Chandelling</h4>
                            <p className="text-xs text-blue-700">Ashore & Offshore</p>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">We provide equipment and supplies for ships and boats.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={oil} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Oil Bunkering</h4>
                            <p className="text-xs text-blue-700">Offshore</p>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">Supply fuel to ship fuel tank. Gas oil or Fuel oil.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={water} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Fresh Water Bunkering</h4>
                            <p className="text-xs text-blue-700">Offshore</p>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">Supply fresh water to ships.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={shipbroking} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Ship Broking</h4>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">We negotiate and arrange contracts for the transportation of goods by sea and intermediaries between buyers and sellers of ships.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={oilbroking} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Oil Broking</h4>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">We facilitate the buying and selling of crude oil between buyers and sellers.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={lubricant} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Lubricant Supply</h4>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">We supply a whole range of lubricants to ships. We suplply shell products, goil products, total and mobile products as well as castro oil.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={maintenance} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Ship Maintenance</h4>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">Corrective maintenance, predictive maintenance, preventive maintenance, planned maintenance & regular condition assessment.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={painting} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Marine Paint Supply</h4>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">We supply a wide variety of marine paint, including bottom paint, topside paint, paints for metal boats, etc.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-4 sm:mb-8">
                        <img src={ropes} alt="" className="rounded-lg aspect-video" />
                        <div className="text-left mt-2">
                            <h4 className="text-xl font-bold">Ship Ropes and Wires</h4>
                        </div>
                        <div className="text-left">
                            <p className="mt-2 sm:mt-4 text-neutral-500">We supply a wide variety of synthetic ropes and wire ropes for marine and offshore applications.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="mt-12 bg-gray-200 pb-10">
            <div className="px-2 py-8 flex flex-wrap rounded-lg justify-center items-center">
                <div className="p-2 w-full lg:w-1/2 space-y-4 lg:space-y-16 text-left">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide">
                        Leading the Way in Shipping Services
                    </h2>
                    <p className="text-neutral-500">We deliver services in 4 countries in Africa and these countries include Ghana, Côte d'Ivoire, Togo and Nigeria. Our main head office is located in Ghana.</p>
                    
                    <div className="">
                        <Link to={"/contact"} className="mt-4 py-2 px-4 bg-blue-700 rounded-lg text-white">Contact Us</Link>
                    </div>
                </div>
                <div className="p-2 mt-8 md:mt-0 w-full lg:w-1/2 flex items-center justify-center">
                    <img src={map} alt="" className="rounded-lg border border-blue-700 shadow shadow-blue-400 mx-2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About
