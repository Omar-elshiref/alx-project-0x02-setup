import Header from '@/components/layout/Header'
import React from 'react'
import { PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard'

const Posts: React.FC<{ postsCard: PostProps[] }> = ({ postsCard }) => {


  return (
    <>
    <Header />
      <div className="flex flex-wrap justify-center">
    {postsCard.map(post => (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              content={post.body}
              body={post.body}
            />
          ))}
          
        
      </div>
      
    </>
  )
}

// getStaticProps لجلب البيانات وقت البناء
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsCard = await res.json();

  return {
    props: {
      postsCard, // بنرجع البوستات كـ props للصفحة
    },
  };
}

export default Posts