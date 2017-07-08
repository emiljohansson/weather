const test = require('ava')
const weather = require('.')

test(async t => {
  t.plan(1)
  await weather()
    .then(result => {
      t.pass()
    })
    .catch(result => {
      t.fail()
    })
})
