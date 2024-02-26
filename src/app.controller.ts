import { Body, Controller, Get, Post } from '@nestjs/common';
import { OpenaiService } from './services/openai/openai.service';

@Controller()
export class AppController {
  constructor(private readonly openaiService:OpenaiService) {}

  // Returns URL of the generated Image
  @Post('generate-image')
  generateImage(@Body() body: any): Promise<string> {
    return new Promise((resolve)=>{
      this.openaiService.generateImage(body.prompt).subscribe((response)=>{
        console.log(response.data)
        resolve(response.data.data[0].url); 
      })
    })
  }
}
