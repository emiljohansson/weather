const YQL = require('yql')
const unit = 'c'
const city = 'denver, co'
const queryString = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '") and u="' + unit + '"'
const query = new YQL(queryString)

module.exports = cb => {
  query.exec((err, data) => {
    if (err) {
      console.log(err)
      return
    }
    const location = data.query.results.channel.location
    const condition = data.query.results.channel.item.condition

    cb({
      city: location.city,
      region: location.region,
      temp: condition.temp,
      unit: unit.toUpperCase()
    })
  })
}
