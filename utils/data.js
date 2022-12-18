import chalk from 'chalk';
import logSymbols from 'log-symbols';

// Chalk Styles
const twitterStyle = chalk.hex('#1DA1F2').bold.inverse;
const githubStyle = chalk.white.bold.inverse;
const dimStyle = chalk.dim;
const bestFriendStyle = chalk.green.bold.inverse;

const success = chalk.green.bold;
const info = chalk.blue.bold;
const error = chalk.red.bold;
const warning = chalk.yellow.bold;

export const bio = `${dimStyle(
  `Software Developer at Vidyard
The number ⭐️ one most impactful developer of our generation.`
)}`;

export const social = `
🐦 ${twitterStyle('Twitter')}: ${dimStyle(`https://twitter.com/dilrajio`)}
😼 ${githubStyle('GitHub')}: ${dimStyle(`https://github.com/dsomel21`)}
🫂  ${bestFriendStyle('Best Friend at Vidyard')}: ${dimStyle(`Matt Cook`)}
`;

export const infoBanner = (msg) => {
  console.log(`${info(msg)}`);
};
