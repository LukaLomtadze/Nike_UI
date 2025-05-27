import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className=' font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          Special <span className='text-coral-red'>Offer</span>
        </h2>

       <p className='mt-6 lg:max-w-lg info-text'>Don’t miss out on our limited-time special offers—get your favorite Nike shoes at unbeatable prices today!</p>

       <p className='mt-6 lg:max-w-lg info-text'>Grab exclusive Nike deals and discounts now! Shop top styles with special pricing, only while supplies last.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label={"Learn More"} backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer