import React from 'react'
import { type ButtonProps } from '@/interfaces/index'

const sizeClasses: Record<string, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

const shapeClasses: Record<string, string> = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
}

const Button: React.FC<ButtonProps> = ({ shape, size, children }) => {
  return (
    <button
      className={`bg-blue-500 text-white hover:bg-blue-600 transition duration-300 cursor-pointer ${sizeClasses[size]} ${shapeClasses[shape]}`}
    >
      {children || 'Click Me'}
    </button>
  )
}

export default Button