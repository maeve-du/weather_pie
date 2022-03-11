// Resource URL
// http://dataservice.accuweather.com/locations/v1/cities/search


const apiKey = "YiBuISayANKqpJAwBfNNcZiKhd4OWAgZ"; //50 request per day


// get weather info  ===============
// Current Conditions API > Current Conditions
// apikey (required)
// Resource URL:
// http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
// curl -X GET "http://dataservice.accuweather.com/currentconditions/v1/101924?apikey=YiBuISayANKqpJAwBfNNcZiKhd4OWAgZ"
const getWeather = async (cityKey) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${apiKey}`; // get it from city info //"101924" beijing
    const res = await fetch(baseURL + query);
    const data = await res.json()
    return data[0]
}

// get city info ===============
// Locations API > City Search: 
// Resource URL:
// https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
// apikey (required)
// q (required)
// curl -X GET "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=YiBuISayANKqpJAwBfNNcZiKhd4OWAgZ&q=london"
const getCity = async (city) => {

    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const res = await fetch(baseURL + query);
    const data = await res.json();

    return data[0];

}

// getCity('beijing')
//     .then(data => getWeather(data.Key))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

