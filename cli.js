#! /usr/bin/env node

require('.')(result => {
  const string = result.city +
    ',' +
    result.region +
    ': ' +
    result.temp +
    ' ' +
    result.unit +
    ' degrees.'
  console.log(string)
})
