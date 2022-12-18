import meow from 'meow';

const options = {
  flags: {
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
    debug: {
      type: 'boolean',
      default: false,
    },
  },
  importMeta: import.meta,
};

const helpText = `
  Usage
    npx dilraj [options]

  Options
    social        Show the social information
    --no-social
    ad            Show the ad
    --no-ad

  Examples
    npx dilraj
    npx dilraj --no-social --no-ad
`;

export default meow(helpText, options);
