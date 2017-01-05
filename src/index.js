import program from 'commander';
import run from './run';

program
  .version('0.0.1')
  .option('<dir>')
  .action((dir) => {
    run(dir);
  });

program.parse(process.argv);

