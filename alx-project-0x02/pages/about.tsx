import Button from '@/components/common/Button'
import React from 'react'

const about = () => {
  return (
    <div>
        <h1>about</h1>
       <section className='flex flex-wrap gap-4 p-4'>
        <Button shape='sm' size='small'/>
        <Button shape='md' size='medium'/>
        <Button shape='full' size='large'/>
       </section>
    </div>
  )
}

export default about