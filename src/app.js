import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

import './database';

import express from 'express';

import homeRoutes from './routes/homeR';
import userRoutes from './routes/userR';
import tokenRoutes from './routes/tokenR';
import studentRoutes from './routes/studentR';
import uploadRoutes from './routes/uploadR';

const whiteList = [
  'http://54.94.27.19',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if ((whiteList).indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/upload/', uploadRoutes);
  }
}

export default new App().app;
