#!/usr/bin/env node
import alert from 'cli-alerts';
import handleError from 'cli-handle-error';

import init from './utils/init.js';
import { social, bio } from './utils/data.js';
import cli from './utils/cli.js';
const { flags, input } = cli;
import debug from './utils/debug.js';

(async () => {
  init();
  console.log(bio);

  if (flags.social) console.log(social);
  if (flags.ad) alert({ type: 'info', msg: 'Ad: Check out SPG!' });

  if (flags.debug) {
    debug(cli);
  }
})();

// console.log(`
// ${logSymbols.success} ${success('SUCCESS')}: Thank you for checking out the CLI.
// ${logSymbols.info} ${info('INFO')}: Your installation was successful.
// ${logSymbols.error} ${error('ERROR')}: There was an issue cloning the DevTools repository.
// ${logSymbols.warning} ${warning('WARNING')}: This command is still in beta. If you see anything wrong, please create an issue.
// `)
