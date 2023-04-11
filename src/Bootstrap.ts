// import { RegistrationController } from "./Controllers/RegistrationController";
// import { RegistrationRepository } from "./Repositories/RegistrationRepository";
// import { RegistrationService } from "./Services/RegistrationService";
import express from "express";
import "reflect-metadata";
import morgan from "morgan";

import { InversifyExpressServer } from 'inversify-express-utils';

import './Controllers/RegistrationController';
import { container } from "./di-container";

export async function bootstrap() {
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    app.use(express.json());

  });

  const app = server.build();

  app.listen(3000, () => {
    console.log(`server is listening on http://localhost:3000`);
  })
  return {}
}

bootstrap();