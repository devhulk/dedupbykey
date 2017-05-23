#!/usr/bin/env node

let program = require('commander')
let _ = require('lodash')
let fs = require('fs')
program
  .arguments('<file> <keys...>')
  .action((file,keys) => {
    data  = JSON.parse(fs.readFileSync(file, 'utf8'))
    let hash = {}
    data.forEach((item) => {
      let compositeKey = ''
      keys.forEach((key) => {
        compositeKey += item[key]
      })
      hash[compositeKey] = item
    })
      console.log(JSON.stringify(_.toArray(hash),null,4))
  })

program.parse(process.argv);

if(program.args.length < 2) program.help()
