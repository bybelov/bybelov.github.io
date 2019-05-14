const rp = require('request-promise')

module.exports = async function(city = ''){
  if(!city){
    throw new Error('Имя города не может быть пустым')
  }

  const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d'
  const uri = 'http://api.openweathermap.org/data/2.5/weather'

  // console.log('City ', city)
  const options = {
    uri: uri,
    qs:{
      appid: KEY,
      q: city,
      units: 'imperial'
    },
    json: true
  }

  try {
    const response = await rp(options)
    const celsius = (response.main.temp - 32) * 5/9
    // console.log(response);
    return {
      weather: `${response.name}: ${celsius.toFixed(0)}`,
      error: null
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    }
  }

  
}
