import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <header className='bg-blue-500 text-white p-4'>
      <nav className='container mx-auto '>
        <ul className='flex space-x-4'>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>

    </>
  )
}

export default Header