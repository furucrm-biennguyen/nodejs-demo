import * as express from "express";
import { controller, httpGet, interfaces, request, response, next, httpPost } from "inversify-express-utils";
import { RegistrationService } from "../Services/RegistrationService";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import Registration from "../models/Registration.model";

@controller("/api/registrations")
class RegistrationController implements interfaces.Controller {
  constructor(@inject(TYPES.RegistrationService) private _RegistrationService: RegistrationService) { }

  @httpGet('/')
  async index(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction): Promise<any> {
    const registrations = await this._RegistrationService.getRegistration();

    return registrations;
  }

  @httpPost('/')
  async store(@request() req: express.Request, @response() res: express.Response): Promise<any> {
    console.log(typeof req.body);
    
    const registration: Registration = new Registration(req.body);
    console.log(registration.dataValues);
    
    return this._RegistrationService.createRegistration(registration);
  }

  @httpPost('/factory')
  async factory(@request() req: express.Request, @response() res: express.Response): Promise<any> {
    return await this._RegistrationService.factory();
  }
}

export default RegistrationController;
