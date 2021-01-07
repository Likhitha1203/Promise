function Weather_Report(e){
  let city = e.parentElement.firstElementChild.innerText.substring(10)
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d9c51394451909807e616a21b768060`).then((response) => {
    return response.json();
  }).then((data) => {
    alert(`Current temperature is ${data.main.temp - 273.15} degree C`);

  }).catch((error) => {
    console.log(error);
  })
}

let restCountries = fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let node,
      cardHeader,
      img,
      cardBody,
      capital,
      region,
      countryCode,
      button = {};

    data.forEach((element) => {
      node = document.createElement("div");
      node.classList.add("card", "text-center", "float-start");
      node.setAttribute("style", "width: 300px; margin: 10px; height: 450px;");

      cardHeader = document.createElement("div");
      cardHeader.setAttribute("class", "card-header");
      cardHeader.innerText = element.name;
      node.appendChild(cardHeader);

      img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("style","height: 175px;")
      img.setAttribute("src", element.flag);
      node.appendChild(img);
    
      cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-center");

      capital = document.createElement("p");
      capital.innerText = `Capital : ` + element.capital;

      region = document.createElement("p");
      region.innerText = `Region : ` + element.region;

      countryCode = document.createElement("p");
      countryCode.innerText = `Country code : ` + element.alpha3Code;

      cardBody.appendChild(capital);
      cardBody.appendChild(region);
      cardBody.appendChild(countryCode);

      button = document.createElement("a");
      button.setAttribute("href", "#");
      button.setAttribute("onclick", "Weather_Report(this)");
      button.classList.add("btn", "btn-primary");
      button.innerText = `Click for weather`;
      cardBody.appendChild(button);

      node.appendChild(cardBody);

      container.appendChild(node);
    });

    document.body.append(container);
  })
  .catch((error) => {
    console.log(error);
  });