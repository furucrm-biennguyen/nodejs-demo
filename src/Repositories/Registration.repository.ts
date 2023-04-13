import Registration, { RegistrationCollection } from "../models/Registration.model";
import { injectable } from 'inversify';

@injectable()
export default class RegistrationRepository {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  factory = async () => {
    try {
      const newRegistration = await Registration.create({
        user_name__c: 'Bien TS',
        user_phone__c: '012345',
        user_email__c: 'bien.nguyen@furucrm.com',
        user_birth_date__c: new Date('1997-03-02'),
        position_duration__c: 12,
        company_name__c: 'furuCrm',
        job_position__c: 'PHP developer',
        position_description__c: 'Website develop',
      });

      return newRegistration;
    } catch (error: any) {
      return error.message;
    }

  }

  async findOne() {
    return await Registration.findOne();
  }

  async getAll() {
    try {
      const data = await Registration.findAll();
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