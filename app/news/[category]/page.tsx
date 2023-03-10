
import { categories } from "../../../constants"
import fetchNews from "../../../lib/fetchNews"
import NewsList from "../../NewsList"

type Props={
    params:{category:Category}
}

const NewsCategory = async ({params:{category}}:Props) => {

     const news:NewsRespone = await fetchNews(category)
  return (
    <div>
        <h1 className="headerTitle">{category}</h1>
         <NewsList news={news}/>
    </div>
  )
}

export default NewsCategory
//tells next tio pre build category pages
export async function generateStaticParams(){
    return categories.map(category =>({
        category:category
    }))
}