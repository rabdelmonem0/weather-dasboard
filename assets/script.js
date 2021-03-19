window.addEventListener("load", function () {
    // api.openweathermap.org/data/2.5/forecast?q=Corona,us&appid=597dc5ab14150415510a523bbb21b175
    // search button
    var existingHistory;
    // check local storage
    if (!JSON.parse(localStorage.getItem("history"))) {
        existingHistory = [];
    } else {
        existingHistory = JSON.parse(localStorage.getItem("history"));
    }

    var historyItems = [];

    function handleSearchHistory(searchCity) {
        // if there's history and it's lenght is greater than 0
        // set the existing entries to the JSON.parse(localStorage.getItem("history"));
        // set newHistory to [...exisitngEntries, searchCity]
        // set localStorage to newHistory
        // otherwise --- if there's no history
        // historyItems.push(searchCity)
        // set local storage to history items
    }

    function getUVIndex(lat, long) {
        var fetchUrl = "http://https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&appid=597dc5ab14150415510a523bbb21b175"
        fetch(fetchUrl)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                console.log(data);
            })
        // fetch the UV and append to correct place on card
    }

    function addCity(){
        var ul = document.getElementById("dynamic-list");
        var city = document.getElementById("city");
        var li = document.createElement("li");
        li.setAttribute('id',city.value);
        li.appendChild(document.createTextNode(city.value));
        ul.appendChild(li);
    }

    function getForecast(searchValue) {
        var fetchUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&units=imperial&appid=597dc5ab14150415510a523bbb21b175"
        fetch(fetchUrl)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {

                var date = data.list[0].dt_txt;
                var date2 = data.list[8].dt_txt;
                var date3 = data.list[16].dt_txt;
                var date4 = data.list[24].dt_txt;
                var date5 = data.list[32].dt_txt;
                var temp = data.list[0].main.temp;
                var temp2 = data.list[8].main.temp;
                var temp3 = data.list[16].main.temp;
                var temp4 = data.list[24].main.temp;
                var temp5 = data.list[32].main.temp;
                var humidity = data.list[0].main.humidity;
                var humidity2 = data.list[8].main.humidity;
                var humidity3 = data.list[16].main.humidity;
                var humidity4 = data.list[24].main.humidity;
                var humidity5 = data.list[32].main.humidity;
                // var wind = data.wind.speed;
                // var lat = data.coord.lat;
                // var clouds = data.clouds;
                console.log(data);

                document.querySelector(".date-1").textContent = date;
                document.querySelector(".date-2").textContent = date2;
                document.querySelector(".date-3").textContent = date3;
                document.querySelector(".date-4").textContent = date4;
                document.querySelector(".date-5").textContent = date5;
                document.querySelector(".temp-1").textContent = "Temp: " + temp + " F";
                document.querySelector(".temp-2").textContent = "Temp: " + temp2 + " F";
                document.querySelector(".temp-3").textContent = "Temp: " + temp3 + " F";
                document.querySelector(".temp-4").textContent = "Temp: " + temp4 + " F";
                document.querySelector(".temp-5").textContent = "Temp: " + temp5 + " F";
                document.querySelector(".hum-1").textContent = "Humidity: " + humidity + "%";
                document.querySelector(".hum-2").textContent = "Humidity: " + humidity2 + "%";
                document.querySelector(".hum-3").textContent = "Humidity: " + humidity3 + "%";
                document.querySelector(".hum-4").textContent = "Humidity: " + humidity4 + "%";
                document.querySelector(".hum-5").textContent = "Humidity: " + humidity5 + "%";
                // document.querySelector(".wind").textContent = "Wind Speed: " + wind + " MPH";
            })
    }


    function getWeather(searchCity) {
        var fetchUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&appid=597dc5ab14150415510a523bbb21b175"
        fetch(fetchUrl)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                if (!existingHistory.includes(searchCity)) {
                    // append the city to the list
                    // handleSearchHistory(searchCity)
                }
                // this is where we define and render all the elements for the weather
                var date = new Date().toLocaleDateString();
                var name = data.name;
                var temp = data.main.temp;
                var humidity = data.main.humidity;
                var wind = data.wind.speed;
                var latt = data.coord.lat;
                var longg = data.coord.lon;
                var icon = data.weather[0].id;
                console.log(data);

                document.querySelector(".city-title").textContent = name + " " + date;
                document.querySelector(".temp").textContent = "Temprature: " + temp + " F";
                document.querySelector(".hum").textContent = "Humidity: " + humidity + "%";
                document.querySelector(".wind").textContent = "Wind Speed " + wind + " MPH";
                
                getUVIndex(lat,long);
                // getUVIndex(lat, long)
                // getForecast(searchCity) call here, define above
            })
    }

    // submit function to get the search started
    document.querySelector(".searchBtn").addEventListener("click", function (e) {
        e.preventDefault();
        var searchCity = document.querySelector(".city-input").value;
        var searchValue = document.querySelector(".city-input").value;
        var lat = document.querySelector(".city-input").value;
        var long = document.querySelector(".city-input").value;
        if (searchCity) {
            getWeather(searchCity);
            getForecast(searchValue);
            document.querySelector(".city-input").value = "";
        }
    })
})

// "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&appid=597dc5ab14150415510a523bbb21b175"