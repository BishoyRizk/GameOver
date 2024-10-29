const searchParams = location.search

const params = new URLSearchParams(searchParams)

const id = params.get('id');


let containerDetails =  {} ;


(async function (){



    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e5f36bcebfmshdd109735af62375p13e9ecjsnc5bfb7b37fa6',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)

    const responseData = await api.json()
    containerDetails = responseData
    DisPlayData()
    console.log(responseData);
    



 
    
})();





function DisPlayData(){
    const detailsBox = `
   
    <div class="col-md-4">
    <figure>
       <img src="${containerDetails.thumbnail}" class="w-100" alt="details image" />
       <div>
       <h2>Platform: ${containerDetails.platform}</h2>
       <h2>developer: ${containerDetails.developer}</h2>
       <h2>publisher: ${containerDetails.publisher}</h2>
       <h2>release_date: ${containerDetails.release_date}</h2>
       <a href='${containerDetails.game_url}' target='_blank' role="banner" class="btn btn-info">PlayNow</a>
       </div>
    </figure>
 </div>
 <div class="col-md-8">
 
    <div>
       <nav aria-label="breadcrumb">
          <ol class="breadcrumb" class="text-light">
             <li class="breadcrumb-item text-reset"><a href="./home.html">Home</a></li>
             <li class="breadcrumb-item text-info" aria-current="page">${containerDetails.title}</li>
          </ol>
       </nav>
 
       <h1>${containerDetails.title}</h1>
 
       <h3>About ${containerDetails.title}</h3>
       <p>${containerDetails.description}</p>
 
       
    </div>
 </div>
 
    `;
    
    let backgroundImage = containerDetails.thumbnail.replace('thumbnail','background')
    document.getElementById("detailsData").innerHTML = detailsBox;
    document.body.style.cssText = `
    
    background-image: url(${backgroundImage});
    background-size: cover ;
    background-position: center ;


    
    `
}



// const mode = document.getElementById('mode')
// mode.addEventListener('click',function(){
//    if(mode.classList.contains('fa-sun')){
//       document.querySelector('html').setAttribute('data-theme','light')
//       mode.classList.replace('fa-sun','fa-moon')
//    }else{
//       document.querySelector('html').setAttribute('data-theme','dark')
//       mode.classList.replace('fa-moon','fa-sun')
//    }
  
// })
