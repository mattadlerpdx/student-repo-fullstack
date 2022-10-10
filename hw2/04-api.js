/** Exercise 04 - API **/

const url = "https://restcountries.com/v3.1/all";
//use countries as our 
let countries = document.querySelector("#results");

let addElements = (country) => {
  //create a list element
  let li = document.createElement("li");
  li.textContent = `${country.name.official}  ${country.population}`;
  countries.append(li);
};

let getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((country) => {
        addElements(country);
      });
    });
};

getData(url);
