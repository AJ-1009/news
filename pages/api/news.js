

export function indexnews(page){
    return new Promise ((resolve,reject)=>{
        let data = fetch(`https://newsapi.org/v2/top-headlines?category?&language=en&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`)
        resolve(data)
    })
}