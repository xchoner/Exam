let inf=JSON.parse(localStorage.getItem('elem')) 
let parent=document.querySelector('.parent')
let api_key = "9b702a6b89b0278738dab62417267c49" 
let cont=document.querySelector('.container_urish')
let her=document.querySelector('.her')
let trailer=document.querySelector('.trailer')
function info(p) {
       fetch(`https://api.themoviedb.org/3/movie/${inf.id}?api_key=${api_key}`)
        .then(response => response.json()) 
        .then(response =>{
          let inf=document.createElement('div')
          inf.classList.toggle('info')
          inf.innerHTML=`
          <img src="https://image.tmdb.org/t/p/original${response.backdrop_path}"/>
          `
          parent.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${response.backdrop_path}')`
          let inf1=document.createElement('div')
          inf1.classList.toggle('inf1')
          inf1.innerHTML=`
          <h1>${response.original_title}</h1>
          <p>${response.overview}</p>
          `
          parent.append(inf1)
          parent.append(inf)
          
        })}
info()
function barer(p) { 
  fetch(`https://api.themoviedb.org/3/movie/${inf.id}/credits?api_key=${api_key}`) 
  .then(response => response.json()) 
  .then(response =>response.cast.forEach(e => {
      let actor=document.createElement('div')
    actor.classList.toggle('actor')
    actor.innerHTML=`
    
    <img src="https://image.tmdb.org/t/p/w500${e.profile_path}"/>
    <p>${e.name}</p>
    `
  her.append(actor)
  
  

}))
}
function namek(params) {
  fetch(`https://api.themoviedb.org/3/movie/${inf.id}/videos?api_key=${api_key}`) 
  .then(response => response.json()) 
  .then(response =>response.results.forEach(e=>{
  let trair=document.createElement('div')
  let coverik=document.createElement('div')
  let btn =document.createElement
  trair.classList.toggle('trair')
  coverik.classList.toggle('coverik')
  trair.innerHTML=`
  <iframe width="560" height="315" src="https://www.youtube.com/embed/${e.key}" ></iframe>`
  trair.append(coverik)
  trailer.append(trair)
  coverik.addEventListener('click',()=>{
    trair.classList.add('popup')
    trair.querySelector('iframe').style.position='absolute'
    trair.querySelector('iframe').style.zIndex='100'
    trair.querySelector('iframe').style.width='50%'
    trair.querySelector('iframe').style.height='500px'
   let xik =document.createElement('button')
   xik.classList.add('xik')
   xik.innerHTML='x'
   trair.append(xik)
   xik.addEventListener('click',()=>{
   
    trair.style.display='none'

  })
  })
  }))}

namek()
barer()




