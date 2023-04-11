import { registrationController } from './bootstrap';

describe('Bootstrap registration module', () => {
  it('should create a registration and return the full data', async () => {
    const result = await registrationController.store('123456789')

    expect(result).toEqual({
      id: '1',
      user_phone__c: '123456789',
    })

  })

})