import { Process, Processor } from "@nestjs/bull";
import { QueueEnum } from "../enums/queue.enum";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

@Processor(QueueEnum.TinifyImage)
export class QueueProcessor {
  private readonly logger = new Logger(QueueProcessor.name);

  @Process('job-name')
  async handleJob(job: Job<any>) {
    this.logger.debug('Start processing job');
    // Xử lý công việc ở đây
    this.logger.debug('Finished processing job');
  }

}