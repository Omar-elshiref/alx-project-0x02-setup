import React from 'react'
import {CardProps} from '@/interfaces/index'
import Image from 'next/image'


const Card: React.FC<CardProps> = ({ title, content, image}) => {
  return (
    <div className='bg-black shadow-md rounded-lg p-6 m-4 w-300 max-w-sm'>
        <Image src= {image} alt="Card Image" className="w-full h-48 object-cover rounded-t-lg mb-4 bg-amber-300" width={50} height={50}/>
        <h2 className='text-xl font-semibold mb-2 text-blue-700'>{title}</h2>
        <p className='text-white'>{content}</p>
    </div>
  )
}

export default Card