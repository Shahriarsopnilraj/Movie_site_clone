import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { IoMdStarHalf } from 'react-icons/io';

function TopRated({movies}) {
  return (
    <div className='flex gap-6 mt-10'>
      {movies.map((movie) =>
        movie.rating > 7 ? ( 
          <div>
            <img src={movie.card_picture} alt="" className='h-60 mx-auto object-contain rounded-lg' />
            <div className='p-4 space-y-2'>
                    <div className='flex justify-between'>
                    <h3>{movie.title}</h3>
                    <div className='flex items-center gap-2'>
                        <FaEye className='text-gray-500 '/>
                        <FaHeartCircleCheck className='text-rose-700' />
                    </div>
                  </div>
                  <p className='text-sm text-gray-400'>{movie.released_date}</p>
            
                  <div className='flex justify-between p-4' >
                    <p className='text-sm text-black font-extrabold bg-yellow-400 rounded px-2'>{movie.platform}</p>
                    <p className='text-sm text-gray-400 flex justify-center items-center gap-2'><IoMdStarHalf className='text-yellow-400' />{movie.rating}</p>
                  </div>
                  </div>
            
          </div>
        ) : null 
      )}
    </div>
  )
}

export default TopRated
