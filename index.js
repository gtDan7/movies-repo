const send = document.querySelector('.send');
const search = document.querySelector('.search');

send.addEventListener('click',function(){
    fetch('http://www.omdbapi.com/?apikey=3a5b0446&s='+ search.value)
     .then(response => response.json())
     .then(response =>{
        let xlx = response.Search;
        xlx.forEach(m => console.info(m))
     })
})