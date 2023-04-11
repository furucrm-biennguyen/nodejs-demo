import Registration from "../models/Registration.model";
import { injectable } from 'inversify';

@injectable()
export default class RegistrationRepository {
  constructor() { }

  create = async () => {
    try {
      const newRegistration = await Registration.create({
        user_phone__c: '012345',
        user_birth_date__c: new Date('1997-03-02'),
      });

      return JSON.stringify(newRegistration);
    } catch (error: any) {
      return error.message;
    }

  }

  async findOne() {
    return JSON.stringify(await Registration.findOne());
  }

  async getAll() {
    try {
      const data = JSON.stringify(await Registration.findAll());
      return data;
    }catch (error: any) {
      return error.message;
    };
  }

  async save(user_phone__c: string) {
    return await Registration.create({
      user_phone__c: user_phone__c,
    });
  }
}