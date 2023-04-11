import * as express from "express";
import { BaseMiddleware, controller, httpGet, interfaces, request, response, next } from "inversify-express-utils";
import { RegistrationService } from "../Services/RegistrationService";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";

@controller("/")
class RegistrationController implements interfaces.Controller {
  constructor(@inject(TYPES.RegistrationService) private _RegistrationService: RegistrationService) { }

  async store(requestData: string) {
    return this._RegistrationService.createRegistration(requestData);
  }

  @httpGet("/")
  async index(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction): Promise<string> {
    console.log('index registration');
    const registrations = await this._RegistrationService.getRegistration();
    return registrations;
  }

  @httpGet("factory")
  async factory(@request() req: express.Request, @response() res: express.Response): Promise<string> {
    console.log('factory');
    

    return await this._RegistrationService.factory();
  }
}
export default RegistrationController;
