import { MailCheck, MapPinned, PhoneCall } from "lucide-react"
import shipping from "../assets/shipping.jpg"
import co from "../assets/co.jpeg"
import sec from "../assets/sec.jpeg"
import Footer from "@/components/Footer"

const Contact = () => {
  return (
    <>
        <div className="container mx-auto">
            <div className="mt-12">
                <div className="px-2  flex flex-wrap mt-10 rounded-lg justify-center items-center">
                    <div className="p-2 w-full lg:w-1/2 space-y-4">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
                            We are here to help you with all your shipping services
                        </h2>
                    </div>
                    <div className="p-2 w-full lg:w-1/2">
                        <img src={shipping} alt="" className="rounded-lg aspect-video border border-blue-700 shadow shadow-blue-400"/>
                    </div>
                </div>
            </div>
            <div className="mt-10 lg:mt-20 px-4">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mb-4 lg:mb-12">
                    Reach out to us directly
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 sm:px-4 py-2 mb-4">
                        <div className="border border-gray-300 p-4 rounded-lg">
                            <div className="bg-blue-700/50 w-10 h-10 flex items-center justify-center rounded-full">
                                <MailCheck className="text-blue-700 w-5 h-5"/>
                            </div>
                            <p className="font-bold mt-12 text-lg">Send us message</p>
                            <p className="text-xs mt-3">Chat with our friendly team</p>
                            <p className="text-sm mt-16">kaywaashipping@gmail.com</p>
                            <p className="text-sm mt-2">brightacolatse@yahoo.com</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 sm:px-4 py-2 mb-4">
                        <div className="border border-gray-300 p-4 rounded-lg">
                            <div className="bg-blue-700/50 w-10 h-10 flex items-center justify-center rounded-full">
                                <PhoneCall className="text-blue-700 w-5 h-5"/>
                            </div>
                            <p className="font-bold mt-12 text-lg">Call us</p>
                            <p className="text-xs mt-3">Mon-Sun, anytime.</p>
                            <p className="text-sm mt-2">(+233) 24 703 0292</p>
                            <p className="text-sm mt-2"> (+233) 27 198 4264</p>
                            <p className="text-sm mt-2"> (+233) 20 233 9422</p>
                            <p className="text-sm mt-2"> (+233) 24 407 3034</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/4 sm:px-4 py-2 mb-4">
                        <div className="border border-gray-300 p-4 rounded-lg">
                            <div className="bg-blue-700/50 w-10 h-10 flex items-center justify-center rounded-full">
                                <MapPinned className="text-blue-700 w-5 h-5"/>
                            </div>
                            <p className="font-bold mt-3 text-lg">Vists our office</p>
                            <p className="text-xs mt-3">Ghana Post Address.</p>
                            <p className="text-sm mt-2">W113 EAGLE RAY ST</p>
                            <p className="text-sm mt-2">GT-370-3050</p>
                            <p className="italic text-sm mt-4">Sakumono Estate</p>
                            <p className="italic text-sm mt-2">MP-Flat Area - Going to FM</p>
                            <p className="italic text-sm mt-2">Tema - Accra, Ghana</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 px-4 py-6 bg-gray-300 rounded-lg">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mb-12">
                    Meet the management team
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 sm:px-4 py-2 mb-8 ">
                        <div className="w-full rounded-xl">
                            <img src={co} alt="" className="h-full rounded-xl" />
                        </div>
                        <div>
                            {/* <h3 className="font-semibold text-3xl mt-4">Bright Acolatse</h3> */}
                            <p className="text-lg mt-2">CO of Kaywaa Shipping</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 sm:px-4 py-2 mb-8 ">
                        <div className="w-full rounded-xl">
                        <img src={sec} alt="" className="h-full rounded-xl" />
                        </div>
                        <div>
                            {/* <h3 className="font-semibold text-3xl mt-4">Kojo Savage</h3> */}
                            <p className="text-lg mt-2">Secretary of Kaywaa Shipping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact