import React from 'react'
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our satisfied customers about their exepctional experiences with us.
      </p>

      <div className='flex-1 flex mt-24 justify-evenly items-center max-lg:flex-col gap-14 '>
        {reviews.map((item) => (
          <ReviewCard key={item.feedback}
            imgURL = {item.imgURL}
            customerName = {item.customerName}
            rating = {item.rating}
            feedback = {item.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews