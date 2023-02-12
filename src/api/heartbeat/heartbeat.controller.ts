/* eslint-disable prettier/prettier */
import { JwtAuthGuard } from '@auth/guards';
import { CurrentUser, Paginate } from '@decorators';
import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Pagination } from '@types';
import { CreateHeartBeatDto, UpdateHeartbeatDto } from './dto';
import { HeartbeatService } from './heartbeat.service';

@Controller('v1')
@ApiTags('Heartbeat')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class HeartbeatController {
  constructor(private readonly heartbeatService: HeartbeatService) {}

  @Get('heartbeats')
  @HttpCode(HttpStatus.OK)
  findAll(@Query() dto: any, @Paginate() pagination: Pagination) {
    return this.heartbeatService.findAll(dto, pagination);
  }

  @Get('heartbeat/:id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.heartbeatService.findOne(id);
  }

  @Post('heartbeat')
  @HttpCode(HttpStatus.CREATED)
  create(@CurrentUser() user, @Body() dto: CreateHeartBeatDto) {
    return this.heartbeatService.create(user['memberID'],dto);
  }

  @Get('get-heartbeat')
  @HttpCode(HttpStatus.OK)
  getHeartbeat(@CurrentUser() user, @Paginate() pagination: Pagination) {
    return this.heartbeatService.getHeartbeat(user['memberID'], pagination);
  }

  @Patch('heartbeat/:id')
  @HttpCode(HttpStatus.OK)
  update(
    @CurrentUser() user,
    @Param('id') id: string,
    @Body() dto: UpdateHeartbeatDto,
  ) {
    return this.heartbeatService.update(user['memberId'],id,dto);
  }

  @Delete('heartbeat/:id')
  @HttpCode(HttpStatus.OK)
  remove(@CurrentUser() user, @Param('id') id: string, @Headers() header) {
    return this.heartbeatService.delete(user['memberId'],id);
  }
}
