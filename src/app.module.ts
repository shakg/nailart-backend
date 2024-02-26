import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OpenaiService } from './services/openai/openai.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [OpenaiService],
})
export class AppModule {}
