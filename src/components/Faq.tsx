import { Link } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const Faqs = () => {
  return (
    <div className='mt-4 lg:px-0'>
        <div className="lg:px-6 flex flex-wrap mt-10 rounded-lg justify-center">
            <div className="py-2 w-full lg:w-1/2 space-y-4 text-left">
                <h3 className='text-3xl lg:text-5xl font-semibold lg:w-2/5'>FAQ's</h3>
                <div className="w-full lg:w-[80%]">
                    <p>Find answers to some of the most common questions we receive from our customers. If you don’t find what you need, feel free to contact us directly.</p>
                </div>
                <div className="mt-8">
                    <Link to={"/contact"} className="mt-4 py-2 px-4 bg-blue-700 rounded-lg text-white">Contact Us</Link>
                </div>
            </div>
            <div className="p-2 w-full lg:w-1/2 space-y-4">
                <div className="">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="md:py-8">
                            <AccordionTrigger className="md:text-xl">How long does it take to make a delivery?</AccordionTrigger>
                            <AccordionContent >
                                Service delivery happens within 24-48 hours depending on the size of the delivery.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="md:py-8">
                            <AccordionTrigger className="md:text-xl">Is payment made before a service is rendered?</AccordionTrigger>
                            <AccordionContent>
                                No. With the exception of Oil supply which full payment or 70% payment for the service must be made upfront before the service is rendered, payment for all other services can be made within 30 working days after the service have been rendered.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs
