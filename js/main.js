// Fetch The rest country api 
const url = "https://restcountries.com/v3.1/all";
const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    apiWork(data);
}

function apiWork(data) {
    // get the card container
    const cardContainer = document.getElementById("card-container");
    // create a card for each country
    data.forEach(element => {
        // Get the currencies
       

        const div = document.createElement("div");
        div.classList.add("col");
        // console.log(element);
        const card = `
        <div class="card p-3 h-100">
        <img src="${element.flags.svg}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name.common}</h5>
            <p class="card-text">${element.name.official}</p>
            <p class="card-text">Capital : ${element.capital}</p>
            <p class="card-text">Region : ${element.region}</p>
            <p class="card-text">Subregion : ${element.subregion}</p>
            <p><small>Like This Info Click the button to see more....</small></p>
            <button type="button" onclick="modalFn('${element.cca2}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">See More</button>
          </div>
        </div>
        `
        div.innerHTML = card;

        cardContainer.appendChild(div);
    });


}

getApi();

// Modal Function
function modalFn(cca2) {
    // console.log(cca2); 
    const url = `https://restcountries.com/v3.1/alpha/${cca2}`;
    fetch(url)
        .then(res => res.json())
        .then(data => modalWork(data[0]));
}


function modalWork(data){
        // console.log(data); 
        const modalBody = document.getElementById("modal-body");
        const keysFromArr = Object.keys(data.languages);
        // const keysFrom = keysFromArr.join(", ");
        const valuesFromArr = Object.values(data.languages);
        // console.log(valuesFromArr.join(', '));
        const languages = valuesFromArr.join(', ');
        const currenciesKey = Object.keys(data.currencies);
        // const currenciesArr = data.currencies[currenciesKey];
        const currenciesArr = Object.values(data.currencies);
        // const key = data.languages[keysFrom];
        modalBody.innerHTML = `
            <div class="card p-3">
                <img src="${data.flags.svg}" alt="">
                <br>
                <h1 class="fs-5">Name : <b> ${data.name.common}</b></h1>
                <h1 class="fs-5">Capital : ${data.capital[0]}</h1>
                <h1 class="fs-5">Region : ${data.region }</h1>
                <p class="">Population : 161006790</p>
                <p class="">Area : ${data.area}</p>
                <p class="">Borders : ${data.borders ? data.borders : 'Not Found'}</p>
                <p class="">Languages : ${languages}</p>
                <p class="">Currencies : ${currenciesArr[0].name} <br>
                Symbol : <b style="font-size:1.5em;">${currenciesArr[0].symbol}</b>
                <br>
                Name : ${currenciesKey[0]}
                </p>
            </div>
        `
    console.log(Object.keys(currenciesArr));
}