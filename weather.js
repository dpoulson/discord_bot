//Hoth Weather
var hothWeather = [
    "It\'s cold... \n- Hoth",
    "It\'s so cold I just saw a Wampa! \n- Hoth",
];

//Tattooine Weather
var tatooineWeather = [
    "I don't like sand... \n- Tatooine",
    "I hope I get a tan! \n- Tatooine",
];

//Alderann Weather
var alderaanWeather = [
    "It\'s beautiful! \n- Alderaan",
    "Look at that view, wait... what\'s that green light in the sk.... \n-Alderaan",
];

//Kamino
var kaminoWeather = [
    "It\'s pretty wet... \n- Kamino",
    "Anyone for fishing? \n- Kamino",
];

//Mustafar
var mustafarWeather = [
    "It\'s not just hot... it\'s DAM HOT! \n-Mustafar",
    "I need to buy Air Conditioning! \n-Mustafar",
];

var weatherArray = [
    
    hothWeather,
    tatooineWeather,
    alderaanWeather,
    kaminoWeather,
    mustafarWeather


];

module.exports =  {
    generateWeather: function() {
     var randomWeatherArray = weatherArray[Math.floor(Math.random() * weatherArray.length)];
     var randomWeather = randomWeatherArray[Math.floor(Math.random() * randomWeatherArray.length)];
     return randomWeather;
    }
};