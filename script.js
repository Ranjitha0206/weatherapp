

// const url = 'https://foreca-weather.p.rapidapi.com/location/search/mumbai?lang=en&country=in';
// const url = 'https://foreca-weather.p.rapidapi.com/forecast/hourly/102643743?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&periods=8&dataset=full&history=0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '163c0462a9msh2ca5d1072864756p1180e0jsn89a52f176e0d',
// 		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
// 	}
// };

// fetch('https://foreca-weather.p.rapidapi.com/location/search/mumbai?lang=en&country=in', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


	
//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '163c0462a9msh2ca5d1072864756p1180e0jsn89a52f176e0d',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
