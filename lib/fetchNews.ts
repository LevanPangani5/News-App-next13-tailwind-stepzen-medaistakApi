import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage"

const fetchNews=async(
    category?:Category| string,
    keywords?:string,
    isDynamic?:boolean
)=>{
    const query=gql`
    query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
        myQuery(
          access_key: $access_key
          categories: $categories
          sort: "published_desc"
          keywords:$keywords
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `
    
    //GraphQL query
   
   const res=   await fetch('https://sorbolo.stepzen.net/api/tan-cow/__graphql',{
        method:'POST',
        cache:isDynamic ? 'no-cache':'default',
        next:isDynamic ?{revalidate:0}:{revalidate:20},
        headers:{
          'Content-Type':'application/json',
          Authorization:`Apikey ${process.env.STEPZEN_API_KEY}`  
        },
        body:JSON.stringify({
            query,
            variables:{
               access_key:process.env.MEDIASTACK_API_KEY,
               categories:category,
               keywords:keywords, 
            }

        })   
    })
console.log("loading",
 category,keywords)


    //Fetch with Next.js 13 caching
    var newsResponse = await res.json();
     console.log(newsResponse)
    const news = sortNewsByImage(newsResponse.data.myQuery)
    //Sort by images vs none images present
     console.log('news')

    return news
  }

export default fetchNews

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=920d040ecb21a9e7e98fc3fb9ead6819&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
   