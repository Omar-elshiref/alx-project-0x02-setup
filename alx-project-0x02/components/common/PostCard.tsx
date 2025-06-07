import React from 'react'
import { type PostProps } from '@/interfaces/index'

const PostCard: React.FC<PostProps> = ({userId, title, content}) => {
  return (
      <div className='bg-black shadow-md rounded-lg p-6 m-4 w-300 max-w-sm'>
            <h2 className='text-xl font-semibold mb-2 text-blue-700'>{title}</h2>
            <p className='text-white'>{content}</p>
            <p className='text-gray-400 mt-2'>User ID: {userId}</p>
        </div>
  )
}

export default PostCard