const send = document.querySelector('.send');
const search = document.querySelector('.search');

send.addEventListener('click',function(){
    function getDataMovies(url,succes,error){
      let xml = new XMLHttpRequest();

      xml.onreadystatechange = function(){
        if(xml.readyState === 4){
          if(xml.status === 200){
            succes(xml.response);
          } else if(xml.status === 402){
            error();
          }
        }
      }
      xml.open('get',url);
      xml.send();
    }
    getDataMovies('http://www.omdbapi.com/?apikey=3a5b0446&s='+search.value,(hasil)=>{
      let xlx = JSON.parse(hasil);
      let movies = xlx.Search;
      movies.forEach(m => console.info(m))
    })
})