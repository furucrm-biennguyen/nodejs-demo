import { Container } from 'inversify';
import { RegistrationService } from './Services/RegistrationService';
import { TYPES } from './types'
import RegistrationRepository from './Repositories/Registration.repository';
import Registration from './models/Registration.model';

export const container = new Container();
container.
  bind<RegistrationService>(TYPES.RegistrationService)
  .to(RegistrationService)
  .inSingletonScope();

container.
  bind<RegistrationRepository>(TYPES.RegistrationRepository)
  .to(RegistrationRepository)
  .inSingletonScope();

// container.
//   bind<Registration>(TYPES.Registration)
//   .to(Registration)
//   .inSingletonScope();
