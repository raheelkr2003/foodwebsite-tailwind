import React from 'react'

function FoodCard({name, image}) {
  return (
    
    <div className='relative rounded-md overflow-hidden hover:transform hover:scale-105 transition-transform duration-300'>
      <img className=' h-[400px] rounded-md' src={image} alt="" />
      <p className='bottom-[10%] right-[50%] absolute text-white font-semibold translate-x-[50%] translate-y-[50%]'>{name}</p>
    </div>
  )
}

export default FoodCard
