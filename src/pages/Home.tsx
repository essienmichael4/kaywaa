import Faqs from "@/components/Faq"
import About from "../components/About"
import Hero from "../components/Hero"
import Process from "../components/Process"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <>
        {/* <Navbar /> */}
        <div className="container mx-auto">
            <div className='mx-auto px-6 max-w-7xl pt-12'>
                <Hero />
            </div>
        </div>
        <div className='mx-auto max-w-7xl '>
            <About />
            
        </div>
        <div className="container mx-auto">
            <div className='mx-auto px-6 max-w-7xl pt-12'>
                <Process />
                <Faqs />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Home
