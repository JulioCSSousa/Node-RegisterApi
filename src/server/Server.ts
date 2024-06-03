import express from 'express';
import {} from './routes'
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router);


export {server};

//rodar server yarn ts-node-dev src/index.ts