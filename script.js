let api_key = "9b702a6b89b0278738dab62417267c49" 
let searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query= `
let card=document.querySelectorAll('movies_card')
let cont=document.querySelector('.container')
let arr=[]
let btn=document.querySelectorAll('.btn')
let body=document.querySelector('body')
function reder(url=`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`) { 
  fetch(url) 
    .then(response => response.json()) 
    .then(response => response.results.forEach((e)=>{ 
      let card = document.createElement('div') 
      card.classList.toggle('movies_card') 
      card.innerHTML = `

       <img src=' https://image.tmdb.org/t/p/w500${e.poster_path}'/>
            <h1>${e.title} </h1>
            <h3> Рейтинг ${e.vote_average}</h3>
            <p> Премьера ։ ${e.release_date}</p> 
            <p> Офф язык ։ 
            ${e.original_language}</p>
      ` 
      card.addEventListener('click',()=>{
        location.href='loading.html'
        localStorage.setItem('elem',JSON.stringify(e))
      })
      // arr.push(e.genre_ids)
      // console.log(arr);
      root.append(card) 
})) 
} 
// console.log(arr);
reder() 
let trim
searchk.addEventListener('input', ()=>{ 
  if (searchk.value.trim() !== '') { 
    root.innerHTML = '' 
 
    clearTimeout(trim)
    trim=setTimeout(()=>{
         reder(searchApi + searchk.value)
    },3000)
  }else { 
    reder() 
  } 
})

function categoris(){
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
  .then(response=>response.json())
  .then(response=>response.genres.forEach((e)=>{
    let btn=document.createElement('button')
    btn.classList.toggle('btn')
    btn.innerHTML=e.name
    cat.append(btn)
    btn.addEventListener('click',()=>{
      root.innerHTML=''

      btn.style.background="white"
      if (!arr.includes(e.id)) {

        arr.push(e.id)
      }else{
        arr=arr.filter((b)=>b!==e.id)
        btn.style.background="gray"

      }
       reder(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${arr}`)
      
    
      
    })
   }))}
   
categoris()

function click(params) {
mut.addEventListener('click',()=>{
  body.classList.toggle('body')


})
}
click()
// if (body.style.background='white') {
//   mut.addEventListener('click',()=>{
// body.style.background='black'
//   mut.innerHTML=`Night`

// })
 
// }