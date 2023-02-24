'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Props={
    articel:Article
}

const ReadMoreBtn = ({articel}:Props) => {
    const router = useRouter()

    const handleClick=()=>{
        const queryString= Object.entries(articel)
        .map(([key,value])=>`${key}=${value}`).join('&')
         const  url = `article?${queryString}`
         router.push(url)
    }
  return (
    <button
    onClick={handleClick}
    className='bg-orange-400 h-10 rounded-b-lg dark:text-gary-900
    hover:bg-orange-500'
    >
        Read More</button>
  )
}

export default ReadMoreBtn