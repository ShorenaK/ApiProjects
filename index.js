 document.getElementById("bored-bot").addEventListener("click", getIdea)

function getIdea(){
   fetch("https://www.boredapi.com/api/activity")
   .then((response)=> response.json())
   .then((data) =>{
       console.log(data)
       // to add the class from css 
       document.body.classList.add("fun")
       document.getElementById("idea").innerHTML = data.activity
       document.getElementById("title").innerHTML = "🦾 HappyBot🦿"
   })
}


// fetch("https://dog.ceo/api/breeds/image/random")
// .then((respone)=> respone.json())
// .then((data)=>{

//     console.log(data)
//     document.getElementById("image-container").innerHTML=
//     `
//     <img src="${data.message}" />
//     `
// })

// fetch("https://apis.scrimba.com/bored/api/activity")
// .then((response)=> response.json())
// .then((data)=>{
//    document.getElementById("image-container").textContent =
// data.activity
// })