import { CacheModule, Module } from "@nestjs/common";
import { UploadModule } from "./upload/upload.module";
import { NestjsFormDataModule } from "nestjs-form-data";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModuleModule } from "./config-module/config-module.module";
import { ConfigServiceProvider } from "./config-module/config-module.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    //env
    ConfigModule.forRoot({ isGlobal: true }),

    //ORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModuleModule],
      useFactory: (config: ConfigServiceProvider) =>
        config.createTypeOrmOptions(),
      inject: [ConfigServiceProvider],
    }),

    //jwt
    JwtModule.registerAsync({
      imports: [ConfigModuleModule],
      useFactory: (config: ConfigServiceProvider) => config.createJwtOptions(),
      inject: [ConfigServiceProvider],
    }),

    //redis
    CacheModule.registerAsync({
      imports: [ConfigModuleModule],
      useFactory: async (config: ConfigServiceProvider) => {
        return await config.createRedisOptions();
      },
      isGlobal: true,
      inject: [ConfigServiceProvider],
    }),

    //aplication
    NestjsFormDataModule,
    UploadModule,
  ],
})
export class AppModule {}
