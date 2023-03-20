import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { redisStore } from "cache-manager-redis-store";
import { TimeToLive } from "../enums/common.enum";
import { JwtModuleOptions } from "@nestjs/jwt";
import { BullModuleOptions } from "@nestjs/bull";

@Injectable()
export class ConfigServiceProvider {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      // logging: true,
    };
  }

  createJwtOptions(): JwtModuleOptions {
    return {
    };
  }

  createBullOptions(): BullModuleOptions {
    return {
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
        db: parseInt(process.env.REDIS_DB)
      }
    }
  }

  async createRedisOptions(): Promise<any> {
    return {
      store: await redisStore({
        // url: process.env.REDIS_URL,
        url: `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/${process.env.REDIS_DB}`,
        ttl: TimeToLive.FiveMinutes,
        socket: {
          connectTimeout: 60000
        }
      })
    };
  }

}
