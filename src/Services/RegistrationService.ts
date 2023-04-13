import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import RegistrationRepository from "../Repositories/Registration.repository";

@injectable()
export class RegistrationService {
  constructor(@inject(TYPES.RegistrationRepository) private _RegistrationRepo: RegistrationRepository) { }

  async createRegistration(user_phone__c: string) {
    if (user_phone__c.length >= 10) {
      throw new Error(`User's phone number has to less than 10 digits`);
    }

    return this._RegistrationRepo.save(user_phone__c);
  }

  async getRegistration() {
    return this._RegistrationRepo.getAll();
  }

  async factory() {
    return await this._RegistrationRepo.factory();
  }
}
