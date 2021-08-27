import * as http from 'http';
import {app} from './app';
import {config} from './config';

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log('Listen 5000');
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

process.on('uncaughtException', error => {
  console.log(error);
});

process.on('unhandledRejection', error => {
  console.log(error);
});
