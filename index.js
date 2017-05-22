#!/usr/bin/env node
if(process.argv.length != 4) {
    console.log("Usage: dedupbykey <file> <key>");
    process.exit(-1);
}

let filePath = process.argv[2]
let key = process.argv[3]

let _ = require('lodash')
let fs = require('fs')
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
let destArray=  _.uniqBy(data, key)
console.log(JSON.stringify(destArray,null,2))
