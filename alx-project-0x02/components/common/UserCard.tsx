import React from 'react'
import { type UserProps } from '@/interfaces/index'


const UserCard: React.FC<UserProps> = ({name, email, address: {street, suite, city, zipcode}}) => {
  return (
      <div className='bg-black shadow-md rounded-lg p-6 m-4 w-300 max-w-sm'>
            <h2 className='text-xl font-semibold mb-2 text-blue-700'>{name}</h2>
            <p className='text-white'>{email}</p>
            <p className='text-gray-400 mt-2'>street: {street}</p>
            <p className='text-gray-400 mt-2'>suite: {suite}</p>
            <p className='text-gray-400 mt-2'>city: {city}</p>
            <p className='text-gray-400 mt-2'>zipcode: {zipcode}</p>
        </div>
  )
}

export default UserCard