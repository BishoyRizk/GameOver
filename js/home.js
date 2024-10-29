const loading = document.querySelector('.loading')
// remove and add active class


document.querySelectorAll('.menu .nav-link').forEach(function(item){
    item.addEventListener('click',function(i){
        document.querySelector('.menu .active').classList.remove('active')
        item.classList.add('active')
        console.log(i.target.getAttribute('data-category'));

        const category = i.target.getAttribute('data-category')
        GetGames(category)
        
    })
})


document.querySelector('.logout-btn').addEventListener('click',function(){
   location.href = 'index.html'
   localStorage.removeItem('usertoken')
})

const mode = document.getElementById('mode')
mode.addEventListener('click',function(){
   if(mode.classList.contains('fa-sun')){
      document.querySelector('html').setAttribute('data-theme','light')
   
      let cardText = document.querySelectorAll('.card-text');
      cardText.forEach(element => {
          element.classList.replace('text-white', 'text-dark');
      });
      
      
      
      mode.classList.replace('fa-sun','fa-moon')
   }else{
      document.querySelector('html').setAttribute('data-theme','dark')
      mode.classList.replace('fa-moon','fa-sun')
      let cardText = document.querySelectorAll('.card-text');
      cardText.forEach(element => {
          element.classList.replace('text-dark', 'text-white');
      });
   }
  
})






GetGames('mmorpg')
async function GetGames(CategoryName){
   loading.classList.remove('d-none')

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e5f36bcebfmshdd109735af62375p13e9ecjsnc5bfb7b37fa6',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
 
    const ApiResponse = await fetch(` https://free-to-play-games-database.p.rapidapi.com/api/games?category=${CategoryName}`,options)
    const response = await ApiResponse.json()
    console.log(response);
    DisplayData(response)
    loading.classList.add('d-none')
    




}





function DisplayData(response){
 let Games = ``



 for (let i = 0; i < response.length; i++) {
     
      let vidPath = response[i].thumbnail.replace(`thumbnail.jpg`,'videoplayback.webm')
    Games += `
    <div class="col">
    <div onmouseleave="stopVideo(event)" onmouseenter="startVideo(event)" onclick="showDetails(${response[i].id})" class="card h-100 bg-transparent" role="button" >
       <div class="card-body">

          <figure class="position-relative">
             <img class="card-img-top object-fit-cover h-100" src="${response[i].thumbnail}" />

           <video muted="true"  preload="none" loop   class="w-100 d-none h-100 position-absolute top-0 start-0 z-3">
            <source src="${vidPath}">
            </video>

          </figure>

          <figcaption>

             <div class="hstack justify-content-between">
                <h3 class="h6 small"> ${response[i].title} </h3>
                <span class="badge text-bg-primary p-2">Free</span>
             </div>

             <p class="card-text small text-center opacity-100 text-white">
                ${response[i].short_description}
             </p>

          </figcaption>
       </div>

       <footer class="card-footer small hstack justify-content-between text-white">

          <span class="badge badge-color">${response[i].genre}</span>
          <span class="badge badge-color">${response[i].platform}</span>

       </footer>
    </div>
 </div>
    `;

    
 }


 document.getElementById('gameData').innerHTML = Games 

 
 
 
}




 function startVideo(event){
   let vid = event.target.querySelector('video')
   vid.classList.remove('d-none')
   vid.muted=true
    vid.play()
  
  
}


function stopVideo(event){
   let vid = event.target.querySelector('video')
   vid.classList.add('d-none')
   vid.muted=true
   vid.pause()
}


function showDetails(id){
   location.href = `Details.html?id=${id}`

   
   
}
