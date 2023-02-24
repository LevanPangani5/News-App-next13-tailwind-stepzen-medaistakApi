export default function sortNewsByImage(news:NewsResponse){
if(news ===null) return 
const newsWithImage = news.data.filter((item)=>{item.image !== null})
const newsWithoutImage = news.data.filter((item)=>{item.image ===null}) 
//return  newsWithImage.concat(newsWithoutImage)   
const sortedNewsPesons = {
    pagination:news.pagination,
    data:[...newsWithImage,...newsWithoutImage],
}
return sortedNewsPesons
}   