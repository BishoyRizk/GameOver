const inputs= document.querySelectorAll("input")
const form = document.querySelector("form")
console.log(inputs);
let isvalid = false


const mode = document.getElementById('mode')
mode.addEventListener('click',function(){
   if(mode.classList.contains('fa-sun')){
      document.querySelector('html').setAttribute('data-theme','light')
      mode.classList.replace('fa-sun','fa-moon')
   }else{
      document.querySelector('html').setAttribute('data-theme','dark')
      mode.classList.replace('fa-moon','fa-sun')
   }
  
})


form.addEventListener('input',function(){
    if( valadationEmail() && valadationPassword()){
        
        isvalid = true
    }else{
        isvalid = false
    }

})




form.addEventListener('submit',function(e){
    e.preventDefault()
    if (isvalid == true) {
        setform()
    }
})



function setform(){
    const user = {
       
        email : inputs[0].value,
        password : inputs[1].value,
       
    }
    console.log(user);
    loginForm(user)
}




async function loginForm(userData) {
    const api = await fetch(`https://movies-api.routemisr.com/signin`, {
       method: "post",
       body: JSON.stringify(userData),
       headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
       },
    });
 
    const response = await api.json();
 
    if (response.message === "success") {
        localStorage.setItem("usertoken",response.token)
       location.href = "./home.html";
    } else {
       document.getElementById("msg").innerHTML = response.message;
    }
 
    console.log(response);
 }



//  valadations







// function valadationName(input){
//     let regexforname = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
//     if(regexforname.test(input.value)){
//         input.classList.add("is-valid")
//         input.classList.remove("is-invalid")
//         return true
//     }else{
//         input.classList.remove("is-valid")
//         input.classList.add("is-invalid")
//         return false
//     }
// }

// inputs[0].addEventListener('input',function(){
//     valadationEmail(inputs[0])
    
// })

// inputs[1].addEventListener('input',function(){
//     valadationPassword(inputs[1])
    
// })
 


function valadationEmail(){
    let regexforemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    if(regexforemail.test(inputs[0].value)){
        inputs[0].classList.add("is-valid")
        inputs[0].classList.remove("is-invalid")
        return true
    }else{
        inputs[0].classList.remove("is-valid")
        inputs[0].classList.add("is-invalid")
        return false
    }
}



function valadationPassword(){
    let regexforpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(regexforpassword.test(inputs[1].value)){
        inputs[1].classList.add("is-valid")
        inputs[1].classList.remove("is-invalid")
        return true
    }else{
        inputs[1].classList.remove("is-valid")
        inputs[1].classList.add("is-invalid")
        return false
    }
}



// function valadationage(){
//     let regexforage = /^[1-8][0-9]$/

//     if(regexforage.test(inputs[4].value)){
//         inputs[4].classList.add("is-valid")
//         inputs[4].classList.remove("is-invalid")
//         return true
//     }else{
//         inputs[4].classList.remove("is-valid")
//         inputs[4].classList.add("is-invalid")
//         return false
//     }
// }