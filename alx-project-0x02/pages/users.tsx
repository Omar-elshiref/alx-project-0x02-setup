import Header from '@/components/layout/Header'
import React from 'react'
import { UserProps } from '@/interfaces/index'
import UserCard from '@/components/common/UserCard'

const Users: React.FC<{ usersCard: UserProps[] }> = ({ usersCard }) => {
  return (
    <>
    <Header />
      <div className="flex flex-wrap justify-center">
    {usersCard.map(user => (
            <UserCard
              key={user.id}
              {...user}
              
            />
          ))}
          
        
      </div>
    </>
  )
}

// getStaticProps لجلب البيانات وقت البناء
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersCard = await res.json();

  return {
    props: {
      usersCard, // بنرجع البوستات كـ props للصفحة
    },
  };
}

export default Users