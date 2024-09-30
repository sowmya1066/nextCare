import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch, faTh, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function TopNavbar() {
  return (
    <nav className="bg-[#5DC1B9] text-white p-2 flex items-center justify-between">
      <div className="flex space-x-6">
        <NavItem href="/about-us">About Us</NavItem>
        <NavItem href="/international-patients">International Patients</NavItem>
        <NavItem href="/pay-online">Pay Online</NavItem>
        <NavItem href="/lab-reports">Online Lab Reports</NavItem>
        <NavItem href="/careers">Careers</NavItem>
        <NavItem href="/enquire">Enquire Now</NavItem>
        <NavItem href="/feedback">Feedback</NavItem>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <span className="text-sm">+91-40 6165 6565</span>
        </div>
        <CustomDropdown placeholder="English" />
        <CustomDropdown placeholder="Hospitals" />
        <button className="text-white hover:text-gray-200">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="text-white hover:text-gray-200">
          <FontAwesomeIcon icon={faTh} />
        </button>
      </div>
    </nav>
  )
}

function NavItem({ href, children }) {
  return (
    <Link href={href} className="text-sm hover:border-b-2 border-white pb-1">
      {children}
    </Link>
  )
}

function CustomDropdown({ placeholder }) {
  return (
    <div className="relative inline-block text-left">
      <button className="inline-flex justify-center items-center w-full text-sm font-medium text-white hover:text-gray-200">
        {placeholder}
        <FontAwesomeIcon icon={faChevronDown} className="ml-2 h-4 w-4" />
      </button>
    </div>
  )
}