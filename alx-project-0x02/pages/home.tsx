import Card from '@/components/common/Card'
import React from 'react'

const home = () => {
  return (
    <div>
        <h1>home</h1>
     <section className='flex' >
           <Card 
          title="Card Title"
          content="This is a sample card content. It can be used to display information in a structured format."
          image="/assets/images/next.svg" 
        />
        <Card 
          title="Card Title"
          content="This is a sample card content. It can be used to display information in a structured format."
          image="/assets/images/globe.svg" 
        />
        <Card 
          title="Card Title"
          content="This is a sample card content. It can be used to display information in a structured format."
          image="/assets/images/globe.svg" 
        />
     </section>
    </div>
  )
}

export default home