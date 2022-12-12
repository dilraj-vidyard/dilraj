#!/usr/bin/env node

const packageJson = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

// Chalk Styles
const twitterStyle = chalk.hex('#1DA1F2').bold.inverse;
const githubStyle = chalk.black.bold.inverse;
const dimStyle = chalk.dim;
const bestFriendStyle = chalk.green.bold.inverse;

welcome({
  title: packageJson.name,
  description: packageJson.description,
  version: packageJson.version,
  bgColor: '#FADC00',
  color: '#000000',
  bold: true,
  clear: false,
})

console.log(`
${dimStyle(
  `Software Developer at Vidyard
The number ⭐️ one most impactful developer of our generation.
`)}
🐦 ${twitterStyle('Twitter')}: ${dimStyle(`https://twitter.com/dilrajio`)}
👨‍💻 ${githubStyle('GitHub')}: ${dimStyle(`https://github.com/dsomel21`)}
🫂  ${bestFriendStyle('Best Friend at Vidyard')}: ${dimStyle(`Matt Cook`)}
  `)
