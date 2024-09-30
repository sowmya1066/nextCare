import { useState } from 'react';
import Image from 'next/image';
import WhatsappBanner from '../../public/assets/whatsapp-contact.jpg';
import AniBanner from '../../public/assets/ani-ban-desk.jpg';
import RobotBanner from '../../public/assets/web-banners-robotic.jpg';

const images = [
  { src: WhatsappBanner, alt: 'WhatsApp Contact' },
  { src: AniBanner, alt: 'Animated Banner' },
  { src: RobotBanner, alt: 'Robotic Banner' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Fixed the template literal
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={721}
                height={350}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 mx-1.5 cursor-pointer ${
                currentIndex === index ? 'bg-[#02357E]' : 'bg-[#FFFFFF]'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
