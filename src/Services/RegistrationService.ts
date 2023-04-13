import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import RegistrationRepository from "../Repositories/Registration.repository";
import Registration from "../models/Registration.model";

@injectable()
export class RegistrationService {
  constructor(@inject(TYPES.RegistrationRepository) private _RegistrationRepo: RegistrationRepository) { }

  async createRegistration(registration: Registration): Promise<Registration> {
    return this._RegistrationRepo.save(registration);
  }

  async getRegistration() {
    return this._RegistrationRepo.getAll();
  }

  async factory() {
    return await this._RegistrationRepo.factory();
  }
}
