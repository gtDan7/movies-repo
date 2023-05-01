// Callback,promise,fetch

const send = document.querySelector('.send');
const search = document.querySelector('.search');

let data = new Promise((resovle,reject)=>{
    let ditetpati = true;
    setTimeout(()=>{
      if(ditetpati){
        resovle('Janji ditepati');
      } else{
        reject('janji di ingkari')
      }
   },2000)

    })

    console.info('mulai');
  data
    .then(response => console.info('ok ' + response))
    .catch(response => console.info('not ok ' + response))
    console.info('selesai');