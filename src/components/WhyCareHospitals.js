import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import LeadingDoctors from '../../public/assets/care-hospitals-treatments-1.jpg'
import TreatmentOptions from '../../public/assets/care-hospitals-treatments-2.jpg'
import Accreditations from '../../public/assets/care-hospitals-treatments-3.jpg'

export default function WhyCareHospitals() {
  const cards = [
    {
      title: "Leading Doctors",
      description: "A pool of over 1400 doctors to provide you modern and world class treatment.",
      image: LeadingDoctors,
    },
    {
      title: "Treatment Options",
      description: "We provide services in over 30+ medical specialities with state-of-the-art infrastructure.",
      image: TreatmentOptions,
    },
    {
      title: "Accreditations",
      description: "Our highest standards of care, safe and hygiene practices reflected as our Awards and Accreditations.",
      image: Accreditations,
    },
  ]

  return (
    <div className="container mx-auto px-4 pt-12">
      <h2 className="text-4xl text-center pb-10">Why CARE Hospitals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {cards.map((card, index) => (
          <Card key={index} className="overflow-hidden rounded-none shadow-md">
            <Image src={card.image} alt={card.title} className="object-cover w-full h-60" />
            <CardHeader >
              <CardTitle className="text-lg font-light">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-black">{card.description}</CardDescription>
            </CardContent>
            <CardFooter className="py-2 px-2 pb-3">
              <Button variant="link" className="text-[#00b6bd] items-centre ml-1 text-base transition-transform duration-300 hover:translate-x-1">
                Know More &gt;
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
