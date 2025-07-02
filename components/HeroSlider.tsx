'use client'
// Importing swiper react's component
import { Swiper, SwiperSlide } from 'swiper/react'

// Importing swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import React from 'react'

//A Component
import CustomButton from './CustomButton'
import SwiperNavButtons from './SwiperNavButtons'

import { motion } from 'framer-motion';
import  fadeIn  from '../lib/variants'


export default function HeroSlider() {
  return (
    <>
    <Swiper className='h-full'>
        <SwiperSlide >
            <div className='h-full flex justify-end pt-48'>
                
                <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                    <motion.h1  
                        variants= {fadeIn('up', 0.4)} 
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} 
                    
                    className='h1 text-center lg:text-left mb-2'>
                        <span>Where hard</span>work meets success
                    </motion.h1>

                    <motion.p 
                        variants= {fadeIn('up', 0.6)} 
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} 

                    className='text-white italic text-center lg:text-left mb-4'>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Sint, aliquam.
                    </motion.p>

                    <motion.div
                        variants= {fadeIn('up', 0.8)} 
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} >
                        
                    <CustomButton 
                        text='Get Started' 
                        containerStyles='w-[196px] h-[62px]' />

                    </motion.div>

                </div>
            </div>
        
        </SwiperSlide >
        <SwiperSlide >
            <div className='h-full flex justify-end pt-48'>
                
                <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                    <motion.h1  
                        variants= {fadeIn('up', 0.4)} 
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} 
                    
                    className='h1 text-center lg:text-left mb-2'>
                        <span>Where hard</span>work meets success
                    </motion.h1>

                    <motion.p 
                        variants= {fadeIn('up', 0.6)} 
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} 

                    className='text-white italic text-center lg:text-left mb-4'>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Sint, aliquam.
                    </motion.p>

                    <motion.div
                        variants= {fadeIn('up', 0.8)} 
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} >
                        
                    <CustomButton 
                        text='Get Started' 
                        containerStyles='w-[196px] h-[62px]' />

                    </motion.div>

                </div>
            </div>
        
        </SwiperSlide >

        {/* Swiper Nav Buttons: */}
        <SwiperNavButtons 
        containerStyles = 'absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w[700px] z-50 flex justify-center lg:justify-start gap-1' 
        btnStyles = 'border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300' 
        iconsStyles = 'text-2xl'/>
    </Swiper>

    </>
        
  )
}
