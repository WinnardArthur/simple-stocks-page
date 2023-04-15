import React from 'react';
import Image from 'next/image';

const imagesData = [
  {
    id: 1, 
    path: '/images/CapriGlobalCapitalLimited.jpg',
    alt: "Capri Global"
  },
  {
    id: 2, 
    path: '/images/garnesh.jpg',
    alt: "Ganesh Housing"
  },
  {
    id: 3, 
    path: '/images/Final-Fino-Payments-Bank-Logo_White.jpg',
    alt: "Fino Payments Bank"
  },
  {
    id: 4, 
    path: '/images/gravita.jpg',
    alt: "Gravita"
  },
  {
    id: 5, 
    path: '/images/HIRA.png',
    alt: "HIRA"
  },
  {
    id: 6, 
    path: '/images/data patterns.jpg',
    alt: "Data Patterns"
  },
  {
    id: 7, 
    path: '/images/deep industries.jpg',
    alt: "Deep Industries"
  },
  {
    id: 8, 
    path: '/images/CapriGlobalCapitalLimited.jpg',
    alt: "Capri Global"
  },
  {
    id: 9, 
    path: '/images/garnesh.jpg',
    alt: "Ganesh Housing"
  },
  {
    id: 10, 
    path: '/images/Final-Fino-Payments-Bank-Logo_White.jpg',
    alt: "Fino Payments Bank"
  },
]

export default function FeaturedCompanies() {
  return (
    <div>
        <h2 className='hidden sm:block text-red-400 bg-zinc-100 font-medium text-xl px-4 py-2'>FEATURED COMPANIES</h2>

        <div className='flex justify-between gap-x-4 px-4 bg-slate-200 py-2 md:py-6 overflow-x-scroll featured_companies no-scrollbar'>
          {imagesData.map((item) => {
            return(
              <div>
                <div className='rounded-full md:rounded-none border-2 border-red-500 md:border-none relative w-[3.5rem] h-[3.5rem] md:w-[7rem] md:h-[3rem] flex gap-x-4'>
                  <Image fill key={item.id} src={item.path} alt={item.alt} className='object-cover rounded-full md:rounded-none'/>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}
