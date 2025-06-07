import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import React, { useState } from 'react'
import { CardProps } from '@/interfaces'

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: "Card Title",
      content: "This is a sample card content. It can be used to display information in a structured format.",
      image: "/assets/images/next.svg"
    },
    {
      title: "Card Title",
      content: "This is a sample card content. It can be used to display information in a structured format.",
      image: "/assets/images/globe.svg"
    },
    {
      title: "Card Title",
      content: "This is a sample card content. It can be used to display information in a structured format.",
      image: "/assets/images/globe.svg"
    }
  ])

  const handleAddPost = (data: Omit<CardProps, 'image'>) => {
    setPosts([
      ...posts,
      {
        ...data,
        image: "/assets/images/globe.svg" // صورة افتراضية
      }
    ])
  }

  return (
    <div>
      <h1>home</h1>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded my-4 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        Add Post
      </button>
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
      <section className='flex flex-wrap  gap-4 p-4'>
        {posts.map((post, idx) => (
          <Card
            key={idx}
            title={post.title}
            content={post.content}
            image={post.image}
          />
        ))}
      </section>
    </div>
  )
}

export default Home