import { Module } from "@nestjs/common";
import { QueueService } from "./queue.service";
import { QueueController } from "./queue.controller";
import { BullModule } from "@nestjs/bull";
import { ConfigModuleModule } from "../config-module/config-module.module";
import { ConfigServiceProvider } from "../config-module/config-module.service";
import { QueueEnum } from "../enums/queue.enum";

@Module({
  imports: [
    //queue
    BullModule.forRootAsync({
      imports: [ConfigModuleModule],
      useFactory: (config: ConfigServiceProvider) => config.createBullOptions(),
      inject: [ConfigServiceProvider]
    }),
    BullModule.registerQueue(
      {name: QueueEnum.TinifyImage}
    )
  ],
  controllers: [QueueController],
  providers: [QueueService],
  exports: [QueueModule]
})
export class QueueModule {}
