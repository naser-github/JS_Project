'use strict';

console.log('Asynchronous');

const countriesDiv = document.querySelector('.countries');
const btn = document.querySelector(".btn-country");

const render = function (reqData, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${reqData.flag}" />
            <div class="country__data">
            <h3 class="country__name">${reqData.name}</h3>
            <h4 class="country__region">${reqData.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +reqData.population / 1000000
            ).toFixed(1)} M people</p>
            <p class="country__row"><span>🗣️ ${
              reqData.languages[0].name
            }</span></p>
            <p class="country__row"><span>💰 ${
              reqData.currencies[0].name
            }</span></p>
            </div>
        </article>
        `;

  countriesDiv.insertAdjacentHTML("beforeend", html);
};

const renderError = function(error){
  countriesDiv.insertAdjacentText("beforeend", error);
}

// const info = function(country){
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener("load", function () {
//       const [reqData] = JSON.parse(this.responseText);

//       console.log(reqData);
        
//       render(reqData);
        
//       const neighbors = reqData.borders;
//       console.log(neighbors);
//       if(!neighbors)
//         return;
//       neighbors.map(function (neighbor) {
//          const request2 = new XMLHttpRequest();
//          request2.open(
//            "GET",
//            `https://restcountries.eu/rest/v2/name/${neighbor}`
//          );
//          request2.send();

//          request2.addEventListener("load", function () {
//            const [reqNeighbor] = JSON.parse(this.responseText);

//            //console.log(reqNeighbor);

//            render(reqNeighbor, 'neighbour');
//          }); 
//       });
        

//     });
// };

// info('col');

// sample-1
// const info = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       render(data[0]);
//     });
// }


//sample-2

const infoFetch = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      if(!response.ok)
        throw new Error(`Data not found!! ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      render(data[0]);

      const neighbors = data[0].borders;
      //console.log(neighbors);
      return neighbors;
    })
    .then((neighbors) => {
      neighbors.map(function (neighbor) {
        fetch(`https://restcountries.eu/rest/v2/name/${neighbor}`)
          .then((response) => response.json())
          .then((data) => render(data[0], "neighbour"));
      });
    })
    .catch(error => {
      console.error(`Error ${error}`);
      renderError(error);
    })
    .finally(()=>{
      countriesDiv.style.opacity = 1;
    });
};


// btn.addEventListener('click',function () {
//   infoFetch("portugal");  
// })


// const lotteryPromise = new Promise(function(resolve,reject){

//   setTimeout(() => {
//     if (Math.random() > 0.5) resolve("You have Won");
//     else reject(new Error("Not Good"));
//   }, 0);
// })

//lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//geo location
// navigator.geolocation.getCurrentPosition( 
//   position => console.log(position), 
//   error => console.log(error)
//   );

//async


const asynchronous = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  // return await res.json();
  return res
};


const response = asynchronous('portugal').then() ;

