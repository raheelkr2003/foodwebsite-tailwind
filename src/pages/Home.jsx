import React from 'react'

function Home() {

  return (
    <div>
        {/* Hero Section */}
        <section className='relative'>
            <img className='h-[50vh] w-full object-cover' src="https://plus.unsplash.com/premium_photo-1683657860029-05a5415fa618?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]'>
                <div className='flex gap-1'>
                    <input placeholder='Search' className='px-4 sm:w-[35vw] w-[50vw] py-2 focus:outline-none border border-gray-400 rounded-lg' type="text" name="" id="" />
                    <button className='text-white  py-2 px-6 bg-gradient-to-tl to-pink-500 from-pink-600 rounded-md'>Search</button>
                </div>
            </div>
        </section>


      
    </div>
  )
}

export default Home
