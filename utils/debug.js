// When the `--debug` flag is passed

import alert from 'cli-alerts';

export default ({ input, flags }) => {
  alert({ type: 'warning', msg: 'Debugging Information ⬇️' });
  console.log('input', input);
  console.log('flags', flags);
};
