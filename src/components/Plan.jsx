import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side: Image Grid */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        {/* Image 1: Mountain View */}
        <div className='relative row-span-3 p-2'>
          <img
            className='object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105'
            src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1368&q=80'
            alt='Mountain View'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-60 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={() => window.open(`https://www.google.com/search?q=Mountain+View`, '_blank')}
              className='bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors'
            >
              Search More About the Place
            </button>
          </div>
        </div>

        {/* Image 2: Lake View */}
        <div className='relative row-span-2 p-2'>
          <img
            className='object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105'
            src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=987&q=80'
            alt='Lake View'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-60 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={() => window.open(`https://www.google.com/search?q=Lake+View`, '_blank')}
              className='bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors'
            >
              Discover More
            </button>
          </div>
        </div>

        {/* Image 3: Forest View */}
        <div className='relative row-span-2 p-2'>
          <img
            className='object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105'
            src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1772&q=80'
            alt='Forest View'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-60 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={() => window.open(`https://www.google.com/search?q=Forest+View`, '_blank')}
              className='bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors'
            >
              Explore the Place
            </button>
          </div>
        </div>

        {/* Image 4: Beach View */}
        <div className='relative row-span-3 p-2'>
          <img
            className='object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105'
            src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Beach View'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-60 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={() => window.open(`https://www.google.com/search?q=Beach+View`, '_blank')}
              className='bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors'
            >
              Learn About the Place
            </button>
          </div>
        </div>

        {/* Image 5: Desert View */}
        <div className='relative row-span-2 p-2'>
          <img
            className='object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105'
            src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1673&q=80'
            alt='Desert View'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-60 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={() => window.open(`https://www.google.com/search?q=Desert+View`, '_blank')}
              className='bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors'
            >
              Find Out More
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Text Section */}
      <div className='flex flex-col h-full justify-center'>
        {/* Heading */}
        <h3 className='text-5xl md:text-6xl font-bold animate-fadeIn'>
          Plan Your Next Trip
        </h3>
        <p className='text-2xl py-6 animate-fadeIn delay-200'>
          Discover breathtaking destinations and unforgettable experiences.
        </p>
        <p className='pb-6 animate-fadeIn delay-400'>
          Embark on a journey to explore new places, immerse yourself in nature,
          and create cherished memories that last a lifetime.
        </p>
        {/* Call-to-Action Buttons */}
        <div className='animate-fadeIn delay-600'>
          <button className='border-black mr-4 px-6 py-2 font-semibold hover:shadow-xl transition-shadow'>
            Learn More
          </button>
          <button className='bg-black text-white border-black px-6 py-2 font-semibold hover:shadow-xl transition-shadow'>
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
