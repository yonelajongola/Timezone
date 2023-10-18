function updateTime(){
  // los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <small>${losAngelesTime.format("A")}<small>`;
  
  
  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format("h:mm:ss")} <small>${tokyoTime.format("A")}<small>`;
  
  
  // lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");
  
  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = `${lisbonTime.format("h:mm:ss")} <small>${lisbonTime.format("A")}<small>`;
  }
  
  function updateCity(event){
      let cityTimeZone = event.target.value;
      if(cityTimeZone === "current"){
          cityTimeZone = moment.tz.guess();
  
      }
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
      let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector("#cities");
       citiesElement.innerHTML = `
       <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
  
  
  updateTime();
  // setInterval(updateTime,1000);
  
  let citySelectElement = document.querySelector("#city");
  citySelectElement.addEventListener("change", updateCity)