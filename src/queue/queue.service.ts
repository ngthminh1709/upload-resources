import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { QueueEnum } from "../enums/queue.enum";

@Injectable()
export class QueueService {
  constructor(@InjectQueue(QueueEnum.TinifyImage) private readonly myQueue: Queue) {}

  async addJob(name: string, data: any) {
    await this.myQueue.add(name, data);
  }
}
