'use client'

import { motion } from 'framer-motion'
import fadeIn  from '../lib/variants'

import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'

import CustomButton from './CustomButton'

// Import swiper components
import  { Swiper, SwiperSlide } from 'swiper/react'

import  {Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'


const membershipData = [
    {
        title: 'Standard',
        price: '30',
        benefits: [

            {
                icon: FaCheck,
                text: 'Includes Membership',
    
            },
    
            {
                icon: FaCheck,
                text: 'Access to all gym facilities',
    
            },

            {
                icon: MdClose,
                text: 'Diet Plan included',
    
            },

            {
                icon: FaCheck,
                text: 'Health and fitness tips',
    
            },

            {
                icon: MdClose,
                text: 'Monday-Friday gym access',
    
            },
            {
                icon: FaCheck,
                text: 'Full access to everything',
    
            },
            {
                icon: MdClose,
                text: 'No Additional Amenities',
    
            },
        ]
    },

    {
        title: 'Ultimate',
        price: '45',
        benefits: [

            {
                icon: FaCheck,
                text: 'Includes Membership',
    
            },
    
            {
                icon: FaCheck,
                text: 'Access to all gym facilities',
    
            },

            {
                icon: FaCheck,
                text: 'Diet Plan included',
    
            },

            {
                icon: FaCheck,
                text: 'Health and fitness tips',
    
            },

            {
                icon: FaCheck,
                text: 'Monday-Friday gym access',
    
            },
            {
                icon: FaCheck,
                text: 'Full access to everything',
    
            },
            {
                icon: MdClose,
                text: 'No Additional Amenities',
    
            },
        ]
    },

    {
        title: 'Professional',
        price: '60',
        benefits: [

            {
                icon: FaCheck,
                text: 'Includes Membership',
    
            },
    
            {
                icon: FaCheck,
                text: 'Access to all gym facilities',
    
            },

            {
                icon: FaCheck,
                text: 'Diet Plan included',
    
            },

            {
                icon: FaCheck,
                text: 'Health and fitness tips',
    
            },

            {
                icon: FaCheck,
                text: 'Monday-Friday gym access',
    
            },
            {
                icon: FaCheck,
                text: 'Full access to everything',
    
            },
            {
                icon: FaCheck,
                text: 'No Additional Amenities',
    
            },
        ]
    },
]



export default function MembershipSlider() {
  return (
    <Swiper 
        slidesPerView={2} 
        modules = {[Pagination]} 
        pagination={{
        clickable: true
    }}
    
    breakpoints={{
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }}

    className='min-h-[680px]'
    >
        {membershipData.map((item, index) => 
        {
            return (
            
            <SwiperSlide className='border border-accent hover:bg-primary-300/80 transition-all duration-1000 w-full max-w-sm xl:max-w-none mx-auto' key={index}>
                <div>
                    <div className='py-5 px-[60px] border-b border-accent '>
                        <h4 className='h4'>{item.title}</h4>
                    </div>
                    {/* Benefits */}

                    <div className='py-[30px] px-[60px]'>
                        <ul className='flex flex-col gap-5 mb-7'>
                            {item.benefits.map((item, index) => {
                                return <li className='flex items-center gap-2' key={index}>
                                
                                <item.icon className='text-accent text-lg'/>
                                {item.text}</li>
                            })}
                        </ul>

                        {/* Price and button */}

                        <p className='text-white mb-8 flex gap-1 items-center '>
                            <sup className='text-4xl'>$</sup>
                            <strong className='text-6xl'>{item.price}</strong>
                            <em className='self-end text-2xl'>/month</em>
                        </p>

                        <CustomButton containerStyles='w-[196px] h-[62px]' text='Buy Now' />
                    </div>

                </div>
            </SwiperSlide>
        )
        })}
    </Swiper>
  )
}
