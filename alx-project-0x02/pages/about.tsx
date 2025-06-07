import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

const AboutPage = () => (
    <>
    <Header />
  <div className="space-x-4 p-8">
    <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
    <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
    <Button size="large" shape="rounded-full">Large Rounded-full</Button>
  </div>
  </>
)

export default AboutPage