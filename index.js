#!/usr/bin/env node

const welcome = require('cli-welcome');
const packageJson = require('./package.json')

welcome({
  title: packageJson.name,
  description: packageJson.description,
  version: packageJson.version,
  bgColor: '#FADC00',
  color: '#000000',
  bold: true,
  clear: false,
})

console.log(`Dilraj Singh

Software Developer at Vidyard

The number ⭐️ one most impactful developer of our generation.

👨‍💻 GitHub: https://github.com/dsomel21
🐦 Twitter: https://twitter.com/dilrajio
🫂  Best Friend at Vidyard: Matt Cook

`)
