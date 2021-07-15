import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';

import homeRoutes from './routes/homeR';
import userRoutes from './routes/userR';
import tokenRoutes from './routes/tokenR';
import studentRoutes from './routes/studentR';
import uploadRoutes from './routes/uploadR';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
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
