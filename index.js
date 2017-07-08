const YQL = require('yql')
const unit = 'c'
const city = 'denver, co'
const queryString = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '") and u="' + unit + '"'
const query = new YQL(queryString)

const errorMessage = 'Unable to load the weather.'

module.exports = () => new Promise((resolve, reject) => {
  query.exec((err, data) => {
    if (err || !data.query.results) {
      return reject(errorMessage)
    }
    const location = data.query.results.channel.location
    const condition = data.query.results.channel.item.condition

    resolve({
      city: location.city,
      region: location.region,
      temp: condition.temp,
      unit: unit.toUpperCase()
    })
  })
})
