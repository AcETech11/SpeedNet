import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FaQ = () => {
  return (
    <div className='w-full h-full padding'>
        <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
            <div className='w-full h-full '>
                <h2 className='font-headline text-5xl text-center'>Frequently Asked <br/> Questions</h2>

            </div>
            <div className='w-full h-full md:w-[80%] py-4'>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline">Why should I contact Speednet for my home or office?</AccordionTrigger>
                        <AccordionContent className="font-light">
                        Our services are designed to deliver high-speed connectivity, advanced automation, and robust security—all tailored to meet your unique needs. With our expert team and cutting-edge technology, you’ll experience a seamless transition into a smarter, more efficient environment.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline"> How can Speednet improve my property's security?</AccordionTrigger>
                        <AccordionContent className="font-light">
                        We provide state-of-the-art CCTV installation, automated access control, and continuous monitoring solutions that ensure your property is protected 24/7. Our integrated systems offer both convenience and peace of mind, making your security our top priority.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline">What makes Speednet’s smart home automation different?</AccordionTrigger>
                        <AccordionContent className="font-light">
                        Speednet uses the latest technology to create fully integrated smart home systems that are customizable and scalable. From energy-efficient climate control to intuitive lighting solutions, our systems are designed to evolve with your lifestyle and enhance overall comfort.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-headline">Can Speednet help reduce my energy costs?</AccordionTrigger>
                        <AccordionContent className="font-light">
                        Absolutely! By leveraging smart automation and solar energy solutions, Speednet helps optimize your energy usage. Our systems not only improve your comfort but also contribute to significant long-term savings by reducing energy waste.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline">What kind of support does Speednet offer after installation?</AccordionTrigger>
                        <AccordionContent className="font-light">
                        We provide ongoing support and maintenance to ensure your system always operates at its best. Our dedicated customer service team is available around the clock to assist you with any issues or upgrades, ensuring a reliable and hassle-free experience.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline">How do I get started with Speednet?</AccordionTrigger>
                        <AccordionContent className="font-light">
                        Simply reach out to us via our contact page or call our customer service hotline. Our team will consult with you to understand your needs and design a customized solution that transforms your home or office into a smart, secure, and efficient space.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default FaQ