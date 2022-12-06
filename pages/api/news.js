

export function indexnews(page){
    return new Promise ((resolve,reject)=>{
        fetch(`https://newsapi.org/v2/top-headlines?category?&language=en&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`).then((res)=>res.json).then((res)=>resolve(res))
    })
}