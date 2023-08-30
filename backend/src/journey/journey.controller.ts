import { Body, Controller, Get, Post } from '@nestjs/common';
import { JourneyService } from './journey.service';
import { Journey } from './interfaces/journey.interface';
import { CreateJourneyDto } from './dto/create-journey.dto';

@Controller('journeys')
export class JourneyController {
  constructor(private readonly journeyService: JourneyService) { }

  @Post()
  async create(@Body() createCatDto: CreateJourneyDto) {
    return this.journeyService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Journey[]> {
    return this.journeyService.findAll();
  }
}
