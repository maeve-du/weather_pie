const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // destructure properties
    const { cityDetails, weather } = data;

    // update details template
    // console.log(weather.Temperature.Metric.Value)
    const detailsHtml = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    details.innerHTML = detailsHtml;

    // update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeSrc = null;
    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg'
    // } else {
    //     timeSrc = 'img/night.svg'
    // }

    // Ternary Operator(same result as above)
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'


    time.setAttribute('src', timeSrc)

    // toggle the card
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}


const updateCity = async (city) => {
    // console.log(city)
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key)

    return {
        cityDetails: cityDetails,
        weather: weather
    }
    // Object shorthand notation
    // when we have a property name and a value that 
    // are exactly the same name, we can if we want to,
    // just delete on of them. And that does exactly the
    // same thing. So the return can short as below:
    // return {
    //     cityDetails,
    //     weather
    // }
}

cityForm.addEventListener('submit', (evt) => {
    // prevent default action
    evt.preventDefault()

    // get city value
    const city = cityForm.city.value.trim();

    cityForm.reset()

    // update the ui with new city
    updateCity(city)
        // .then((data) => console.log(data))
        .then((data) => updateUI(data))
        // cityDetails: {Version: 1, Key: '101924', Type: 'City', Rank: 10, LocalizedName: 'Beijing', …}
        // weather: [{…}]
        .catch(err => console.log(err))
})