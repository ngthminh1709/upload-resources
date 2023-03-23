import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { NestjsFormDataModule } from "nestjs-form-data";
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResourcesEntity } from "./entities/resources.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResourcesEntity]),
    NestjsFormDataModule,
  ],
  controllers: [UploadController],
  providers: [UploadService, JwtService]
})
export class UploadModule {}
