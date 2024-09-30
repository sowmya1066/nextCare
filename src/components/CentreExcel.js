import leftImage from '../../public/assets/left-image-care.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function CentreOfExcellence() {
  const specialties = [
    { name: 'Cardiac Sciences', link: '#' },
    { name: 'Gastro Sciences', link: '#' },
    { name: 'Nephrology', link: '#' },
    { name: 'Neurosciences', link: '#' },
    { name: 'Oncology', link: '#' },
    { name: 'Orthopaedics', link: '#' },
    { name: 'Paediatrics', link: '#' },
    { name: 'Pulmonology', link: '#' },
    { name: 'Transplants', link: '#' },
    { name: 'Robot-Assisted Surgery', link: '#' },
    { name: 'Urology', link: '#' },
    { name: 'Woman & Child Institute', link: '#' },
    { name: 'Vascular & Endovascular Surgery and Interventional Radiology', link: '#' },
    
    
  ]

  return (
    <div className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-[#0E2D58] pb-7">Centre of Excellence</h2>
        <div className="bg-white flex flex-col md:flex-row items-start">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <Image
              src={leftImage}
              alt="Medical hologram"

              className="shadow-lg w-full h-full object-cover object-top"
            />
          </div>
          <div className="md:w-7/12 md:pl-6 py-7 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
              {specialties.map((specialty, index) => (
                <Link
                  key={index}
                  href={specialty.link}
                  className="flex items-center text-navy-700 hover:text-navy-500 transition-colors duration-200 mb-4"
                >
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] font-light text-black ">{specialty.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="#"
                className="text-teal-500 hover:text-teal-600 font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <span>View All</span>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}