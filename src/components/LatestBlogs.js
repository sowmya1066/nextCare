import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const blogPosts = [
  {
    id: 1,
    title: 'Chronic Obstructive Pulmonary Disease: Causes, Symptoms, Diagnosis, Treatment and Prevention',
    image: '/placeholder.svg?height=400&width=800',
    excerpt: 'Chronic Obstructive Pulmonary Disease (or COPD) is a lung condition that affects the breathing of a...',
    link: '#'
  },
  {
    id: 2,
    title: 'Can You Overdose on Vitamins: Everything You Need To Know',
    image: '/placeholder.svg?height=200&width=300',
    excerpt: 'Millions of individuals throughout the world take vitamins on a daily basis. Though most supplement bottles in...',
    link: '#'
  },
  {
    id: 3,
    title: 'How Can I Improve My Child\'s Eating Habits?',
    image: '/placeholder.svg?height=200&width=300',
    excerpt: 'You may support your children in maintaining a healthy weight and normal growth by creating appropriate eating...',
    link: '#'
  },
  {
    id: 4,
    title: 'How does Calcium Deficiency affect Bone Health?',
    image: '/placeholder.svg?height=200&width=300',
    excerpt: 'Our bones depend on a balanced diet and a continuous supply of nutrients, especially calcium and vitamin D, fo...',
    link: '#'
  },
  {
    id: 5,
    title: 'Breast Cancer Recovery: Do\'s and Don\'ts During and After Treatment',
    image: '/placeholder.svg?height=200&width=300',
    excerpt: 'Breast cancer has been ranked number one cancer among Indian females with age adjusted rate as high as 25.8 pe...',
    link: '#'
  }
];

const LatestBlogs = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-navy-900">Latest Blogs</h2>
        <Link href="#" className="text-teal-500 hover:text-teal-600 transition-colors duration-200 flex items-center">
          View All
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          {/* COPD post */}
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{blogPosts[0].title}</h3>
              <p className="mb-4">{blogPosts[0].excerpt}</p>
              <Link href={blogPosts[0].link} className="text-teal-400 hover:text-teal-300 transition-colors duration-200 flex items-center">
                Read More
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Calcium Deficiency post */}
          <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
            <div className="w-1/3">
              <Image
                src={blogPosts[3].image}
                alt={blogPosts[3].title}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-xl font-bold text-navy-900 mb-2">{blogPosts[3].title}</h3>
              <p className="text-gray-600 mb-2">{blogPosts[3].excerpt}</p>
              <Link href={blogPosts[3].link} className="text-teal-500 hover:text-teal-600 transition-colors duration-200 flex items-center">
                Read More
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8">
          {[1, 2, 4].map((index) => (
            <div key={blogPosts[index].id} className="flex bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-1/3">
                <Image
                  src={blogPosts[index].image}
                  alt={blogPosts[index].title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-2/3 p-4">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{blogPosts[index].title}</h3>
                <p className="text-gray-600 mb-2">{blogPosts[index].excerpt}</p>
                <Link href={blogPosts[index].link} className="text-teal-500 hover:text-teal-600 transition-colors duration-200 flex items-center">
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="#" className="text-teal-500 hover:text-teal-600 transition-colors duration-200 flex items-center justify-center">
          View All
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogs;