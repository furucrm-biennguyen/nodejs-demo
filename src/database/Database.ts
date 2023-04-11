// @ts-nocheck
import { IRegistration } from "../models/IRegistration";

export interface IDatabaseState {
  registrations: IRegistration[];
}

class Database {
  private state: IDatabaseState = {
    registrations: [],
  }

  async create(registrationData: Omit<IRegistration, 'id'>) {
    this.state.registrations.push({
      id: (this.state.registrations.length + 1).toString(),
      ...registrationData,
    })

    return this.state.registrations.at(-1);
  }

  async queryAll() {
    return JSON.stringify(this.state.registrations);
  }

}

export default new Database();
