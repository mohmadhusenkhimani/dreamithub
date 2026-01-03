import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title: 'Website & Web App Development',
            description: 'We build fast, secure, and scalable websites and web applications using modern technologies like MERN Stack.',
            icon: assets.ads_icon
        },
        {
            title: 'UI/UX & Graphic Design',
            description: 'We design clean, creative, and user-friendly interfaces that enhance user experience and brand identity.',
            icon: assets.marketing_icon
        },
        {
            title: 'Digital Marketing',
            description: 'We help businesses grow online using SEO, social media marketing, and paid advertising strategies.',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        },
    ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title='How can we help?' desc='From idea to execution, we deliver complete digital solutions for your business growth.'/>
   
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index}/>
        ))}
        </div>
    </motion.div>
  )
}

export default Services
