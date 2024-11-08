import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                  <p>GearFlow was founded on the belief that renting and managing vehicles should be simple, reliable, and accessible to everyone.</p>
                  <p>With years of combined experience in automotive services and technology, our team understands the challenges faced by both renters and fleet operators. We harness the power of innovation and user-centric design to create a seamless experience that connects customers with the vehicles they need while empowering fleet managers with efficient tools for optimal operations.</p>
              <b className='text-gray-800'>Our Mission</b>
                  <p>Our Vision: To become the premier choice for car rental and fleet management solutions worldwide by continually enhancing our platform, meeting the dynamic needs of our users, and maintaining our commitment to excellence and innovation.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

          <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Effortless Car Rentals:</b>
                  <p className='text-gray-600'>GearFlow simplifies the car rental process with an intuitive interface, making it quick and seamless for users to find and book their ideal vehicle.</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Streamlined Fleet Management:</b>
                  <p className='text-gray-600'>Our platform offers comprehensive tools for fleet operators to manage, monitor, and optimize their vehicle inventory efficiently.</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Reliable Customer Support:</b>
                  <p className='text-gray-600'>Our dedicated support team is always available to provide assistance, ensuring a smooth and satisfying experience for both renters and fleet managers.</p>
              </div>
          </div>


      <NewsletterBox/>
      
    </div>
  )
}

export default About
