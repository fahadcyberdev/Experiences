import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      {/* Section for room introduction with animation */}
      <motion.div
        className='lg:top-20 relative lg:col-span-1 col-span-2'
        initial={{ opacity: 0, y: -50 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.8 }} // Animation duration
      >
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </motion.div>

      {/* Section for image grid with animation */}
      <div className='grid grid-cols-2 col-span-2 gap-2'>
        {/* First Image with animation */}
        <motion.img
          className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          alt='/'
          initial={{ opacity: 0 }} // Initial state for image animation
          animate={{ opacity: 1 }} // Final state for image animation
          transition={{ duration: 1, delay: 0.2 }} // Animation duration and delay
        />
        {/* Second Image with animation */}
        <motion.img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
          initial={{ opacity: 0 }} // Initial state for image animation
          animate={{ opacity: 1 }} // Final state for image animation
          transition={{ duration: 1, delay: 0.4 }} // Animation duration and delay
        />
        {/* Third Image with animation */}
        <motion.img
          className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
          initial={{ opacity: 0 }} // Initial state for image animation
          animate={{ opacity: 1 }} // Final state for image animation
          transition={{ duration: 1, delay: 0.6 }} // Animation duration and delay
        />
      </div>
    </div>
  );
};

export default Rooms;
