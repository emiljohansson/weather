const request = require('request')
const unitsCelsius = 'metric'
const units = unitsCelsius
const city = 'denver,us'
const uri = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=8bc5131a596e20bc1f4a0966fda7014d`

const errorMessage = 'Unable to load the weather.'

const getUnit = () => {
  if (units === unitsCelsius) {
    return 'C'
  }
  return 'F'
}

module.exports = () => new Promise((resolve, reject) => {
  request(uri, (error, response, body) => {
    if (error || !body) {
      return reject(errorMessage)
    }
    const data = JSON.parse(body)

    resolve({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      unit: getUnit()
    })
  })
})
