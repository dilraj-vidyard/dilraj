import checkNode from 'cli-check-node';
import unhandled from 'cli-handle-unhandled';
import welcome from 'cli-welcome';
import packageJson from '../package.json' assert { type: 'json' };

export default () => {
  unhandled();

  welcome({
    title: packageJson.name,
    description: packageJson.description,
    version: packageJson.version,
    bgColor: '#FADC00',
    color: '#000000',
    bold: true,
    clear: true,
  });

  checkNode('18');
};
