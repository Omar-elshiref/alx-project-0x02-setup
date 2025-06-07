import React from 'react'
import { ButtonProps } from '@/interfaces/index'

const Button:React.FC<ButtonProps> = ({shape, size}) => {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 rounded-${shape} hover:bg-blue-600 transition duration-300 cursor-pointer size-${size}`}>
      Click Me
    </button>
  )
}

export default Button