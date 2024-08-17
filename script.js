// fetch('https://randomuser.me/api/',)
// .then(res=>{
//     return res.json();
// }

// )
// .then(data=>{
//         data.foreach( user=>{
// const markup= `<li>${user.name}</li>`

// document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//             } );
//     })


// .catch(error=>console.log(error));


// var faker = require('faker'); // Faker.js

// api.customer  = {
//     id:    random.special(4, 8),
//     name:  faker.name.findName(),
//     phone: faker.phone.phoneNumber("(###) ###-####"),
//     address: {
//         street: faker.address.streetAddress(),
//         city: faker.address.city(),
//         state: faker.address.state(),
//     }
// } ;

// const url=("https://cat-fact.herokuapp.com/facts");


//  const getFacts = async()=>{
//     console.log("getting data.....");
//     let response = await fetch(URL);
//     console.log(response);
//  } ;

let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
   let getUserBtn = document.getElementById("get-user-btn");
   let url="https://random-data-api.com/api/v2/users?";


let getUser =() =>{
   fetch(url)
   .then ((resp)=> resp.json())
      .then((data) =>{
         // console.log(data);
         // console.log(data.first_name);
         // console.log(data.last_name);
         // console.log(data.avatar);
         // console.log(data.employment.title);
         // console.log(data.address.city);
         //////

         console.log("hello world ");

         imgContainer.innerHTML =`<img src = ${data.avatar}
         >`;

         details.innerHTML = `
         <h2>${data.first_name} ${data.last_name}</h2>
         <h3>${data.employment.title}</h3>;
         <h4> <i class="fa-solid fa-location-dot"></i>
         ${data.address.city}</h4>`;

         let randomColor =
         "#" + ((Math.random() *  0xfffff) << 0).toString(16).padStart(6 , "0");
 document.documentElement.style.setProperty
 ("--theme-color", randomColor);

           
   });
  
};

window.addEventListener("load", getUser);
getUserBtn.addEventListener("click",getUser);