import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import Image from 'next/image'
import Malakpet from '../../public/assets/muusheerabad.jpg';
import Banjarahills from '../../public/assets/banjarahills.jpg';

const locations = {
  Hyderabad: [
    { name: 'CARE Hospitals, Malakpet', image: Malakpet, address: '16-6-104 to 109, Old Kamal Theater Complex Chaderghat Road, Opp Niagara Hotel, Chaderghat, Hyderabad, Telangana - 500024' },
    { name: 'CARE Hospitals, Banjara Hills', image: Banjarahills, address: 'Road No 1, Banjara Hills, Hyderabad, Telangana 500034' },
    { name: 'CARE Hospitals Outpatient Centre, Banjara Hills', image: '/placeholder.svg?height=200&width=300', address: 'Road No 10, Banjara Hills, Hyderabad, Telangana 500034' },
    { name: 'CARE Hospitals, Nampally', image: '/placeholder.svg?height=200&width=300', address: 'Exhibition Grounds Road, Nampally, Hyderabad, Telangana 500001' },
    { name: 'CARE Hospitals, Hi-tech City', image: '/placeholder.svg?height=200&width=300', address: 'Old Mumbai Highway, Jayabheri Pine Valley, HITEC City, Hyderabad, Telangana 500032' },
    { name: 'CARE Hospitals, Musheerabad', image: '/placeholder.svg?height=200&width=300', address: '5-9-22, Shapurwadi, Musheerabad, Hyderabad, Telangana 500020' },
    { name: 'CARE Hospitals, Secunderabad', image: '/placeholder.svg?height=200&width=300', address: 'Kalinga, Picket, Secunderabad, Telangana 500003' },
  ],
  Raipur: [
    { name: 'CARE Hospitals, Raipur', image: '/placeholder.svg?height=200&width=300', address: 'Pachpedi Naka, Raipur, Chhattisgarh 492001' },
  ],
  Bhubaneswar: [
    { name: 'CARE Hospitals, Bhubaneswar', image: '/placeholder.svg?height=200&width=300', address: 'Plot No. 324, Unit-6, Bhubaneswar, Odisha 751001' },
  ],
  Visakhapatnam: [
    { name: 'CARE Hospitals, Visakhapatnam', image: '/placeholder.svg?height=200&width=300', address: '15-1-12, Gopal Sadan, Maharanipeta, Visakhapatnam, Andhra Pradesh 530002' },
    { name: 'CARE Hospitals, Visakhapatnam', image: '/placeholder.svg?height=200&width=300', address: '15-1-12, Gopal Sadan, Maharanipeta, Visakhapatnam, Andhra Pradesh 530002' },
  ],
  Nagpur: [
    { name: 'CARE Hospitals, Nagpur', image: '/placeholder.svg?height=200&width=300', address: '3, Farmland, Panchsheel Square, Nagpur, Maharashtra 440015' },
  ],
  Indore: [
    { name: 'CARE Hospitals, Indore', image: '/placeholder.svg?height=200&width=300', address: '54/5, Vijay Nagar, AB Road, Indore, Madhya Pradesh 452010' },
  ],
  Aurangabad: [
    { name: 'CARE Hospitals, Aurangabad', image: '/placeholder.svg?height=200&width=300', address: 'Jalna Road, Aurangabad, Maharashtra 431001' },
  ],
}

export default function Locations() {
  const [activeCity, setActiveCity] = useState('Hyderabad')
  const [activeSet, setActiveSet] = useState(0)

  const getHospitalSets = (hospitals) => {
    const sets = []
    for (let i = 0; i < hospitals.length; i += 3) {
      sets.push(hospitals.slice(i, i + 3))
    }
    return sets
  }

  return (
    <div className="container mx-auto pt-14">
      <h2 className="text-4xl font-light text-center mb-8">Our Locations</h2>
      <p className="text-center mb-16 max-w-8xl mx-auto text-lg">
        CARE Hospitals, a part of the Quality Care India Limited, brings international quality healthcare to serve patients across the world. With 17 healthcare facilities serving 7 cities across 6 states in India we are counted among the top 5 pan-Indian hospital chains.
      </p>

      <Tabs value={activeCity} onValueChange={(city) => { setActiveCity(city); setActiveSet(0); }} className="w-full">
        <TabsList className="w-full flex justify-between border-b border-red mb-8">
          {Object.keys(locations).map((city) => (
            <TabsTrigger key={city} value={city} className="px-6 py-3 text-gray-600 hover:text-teal-500 border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:text-teal-500 transition-all duration-200 ease-in-out">
              {city}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(locations).map(([city, hospitals]) => (
          <TabsContent key={city} value={city} className="mt-8">
            {city === 'Hyderabad' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getHospitalSets(hospitals)[activeSet].map((hospital) => (
                    <LocationCard key={hospital.name} hospital={hospital} />
                  ))}
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {getHospitalSets(hospitals).map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${index === activeSet ? 'bg-primary' : 'bg-gray-300'}`}
                      onClick={() => setActiveSet(index)}
                      aria-label={`Show set ${index + 1} of hospitals`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital) => (
                  <LocationCard key={hospital.name} hospital={hospital} />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function LocationCard({ hospital }) {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0 relative">
        <Image src={hospital.image} alt={hospital.name} width={300} height={200} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-xl font-semibold mb-2">{hospital.name}</h3>
          <hr className="border-t border-white opacity-50 mb-2" />
          <p className="text-white text-sm mb-4">{hospital.address}</p>
          <Link href="#">
            <Button variant="secondary" size="sm">
              Know More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}