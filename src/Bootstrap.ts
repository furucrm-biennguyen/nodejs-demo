// import { RegistrationController } from "./Controllers/RegistrationController";
// import { RegistrationRepository } from "./Repositories/RegistrationRepository";
// import { RegistrationService } from "./Services/RegistrationService";
import express from "express";
import "reflect-metadata";
import logger from "morgan";
import cors from "cors";
import config from './config/config';
import bodyParser from 'body-parser';

import { InversifyExpressServer } from 'inversify-express-utils';

import './Controllers/RegistrationController';
import { container } from "./di-container";
import { TYPES } from "./types";

export async function bootstrap() {
  container.bind(TYPES.Config).toConstantValue(config);
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    app.use(express.json());
    app.use(logger('dev'));
    app.use(cors());
    app.use(bodyParser.json());

  });

  const app = server.build();

  app.listen(3000, () => {
    console.log(`server is listening on http://localhost:${config.webServer.port}`);
  })
  return {}
}

bootstrap();