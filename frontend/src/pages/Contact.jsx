import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'CONTACT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our Office</p>
                    <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Sandton, SA</p>
                    <p className='text-gray-500'>Tel: (123) 456 7890 <br /> Email: admin@gearflow.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at GearFlow</p>
                    <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

                    <p className='font-semibold text-xl text-gray-600'>Become a Fleet Manager</p>
                    <p className='text-gray-500'>Interested in managing your own fleet with GearFlow? Our team is ready to set you up with everything you need to get started. Contact us today and take the first step towards seamless fleet management.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Contact Our Team</button>
                </div>
            </div>

            <NewsletterBox />
        </div>
    )
}

export default Contact
