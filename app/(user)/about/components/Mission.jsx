import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Mission = () => {
  return (
    <div className='padding w-full h-full pb-4 flex flex-col items-center justify-center '>
        <div className='w-full h-full md:w-[60%]'>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline">Mission</AccordionTrigger>
                    <AccordionContent className="font-light">
                    At Speednet, our mission is to empower homes and businesses with innovative smart automation solutions that ensure security, efficiency, and sustainability. We are dedicated to providing cutting-edge connectivity that transforms everyday spaces into intelligent, responsive environments.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline">Vision</AccordionTrigger>
                    <AccordionContent className="font-light">
                    Our vision is to lead the smart automation revolution by creating a seamlessly connected future. We strive to be the go-to partner for innovative technology solutions that enhance quality of life, redefine modern living, and drive sustainable progress.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline">Values</AccordionTrigger>
                    <AccordionContent className="font-light">
                        <p className='font-headline mb-5'>We Believe in:</p>
                        <ul className='w-full h-full flex flex-col gap-2 items-start justify-center'>
                            <li>
                                <strong>Integrity:</strong> Building trust through transparent, ethical practices. 
                            </li>
                            <li>
                                <strong>Innovation: </strong> Pioneering new technologies to shape the future.
                            </li>
                            <li>
                                <strong>Excellence:</strong> Delivering outstanding performance and quality in every project.
                            </li>
                            <li>
                                <strong>Customer-Centricity:</strong> Prioritizing our clients' needs to create truly personalized experiences.
                            </li>
                            <li>
                                <strong>Sustainability:</strong> Embracing eco-friendly solutions to drive long-term progress.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <p className='font-script dark:text-gray-dark text-gray-light'>These values guide every decision we make, ensuring that Speednet remains a reliable and forward-thinking partner in smart living.</p>
    </div>
  )
}

export default Mission