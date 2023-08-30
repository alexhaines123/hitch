import { Controller, Get } from '@nestjs/common';
import { JourneyService } from './journey.service';

@Controller()
export class JourneyController {
  constructor(private readonly appService: JourneyService) {}

  @Get()
  getHello(): Promise<any> {
    return this.appService.findAll();
  }
}
