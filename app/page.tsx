
import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList'
import response from '../response.json'
const page = async() => {


const data:NewsResponse =  response.data.myQuery//await fetchNews(categories.join(','))
console.log('here is dataa ')


  return (
    <div>
      <NewsList news={data}/>
    </div>
  )
}

export default page