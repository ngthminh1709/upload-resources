import { Controller, Post, UseGuards } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { FormDataRequest } from "nestjs-form-data";
import { AuthGuard } from "../guards/auth.guard";

@Controller('upload')
@UseGuards(AuthGuard)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('upload')
  @FormDataRequest()
  async handleUploadFile() {
    return this.uploadService.handleUploadFile();
  }
}
