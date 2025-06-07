import Header from '@/components/layout/Header'
import React from 'react'
import { useEffect, useState } from 'react'
import { PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard'

const Posts = () => {
  const [postsCard, setPostsCard] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPostsCard(data.slice(0, 10)) // عرض أول 10 بوستات فقط
        setLoading(false)
      })
  }, [])
  console.log(postsCard)
  return (
    <>
    <Header />
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <div className="text-white mt-8">Loading...</div>
        ) : (
          postsCard.map(post => (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              content={post.body}
              body={post.body}
            />
          ))
        )}
      </div>
    </>
  )
}

export default Posts