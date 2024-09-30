import Logo from'../../public/assets/logo.jpg';
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faStethoscope, faHospital, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="CARE Hospitals Logo" width={60} height={50} />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/doctors">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faUserMd} className="h-5 w-5 mr-2" />
                Doctors
              </span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/specialities">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faStethoscope} className="h-5 w-5 mr-2" />
                Specialities & Treatments
              </span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/locations">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faHospital} className="h-5 w-5 mr-2" />
                Hospitals & Directions
              </span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/appointment">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="h-5 w-5 mr-2" />
                Book an Appointment
              </span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2" />
                Contact Us
              </span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}