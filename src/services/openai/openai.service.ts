import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosHeaders } from "axios";
import { Observable } from "rxjs";

@Injectable()
export class OpenaiService {
  constructor(private readonly httpService: HttpService) {}
  private readonly API_KEY = process.env.OPEN_AI_KEY;
  private readonly URL = "https://api.openai.com/v1/images/generations";
  generateImage(prompt:string): Observable<any> {
    const headers = new AxiosHeaders({
      Authorization: `Bearer ${this.API_KEY}`,
    });

    const body = {
      model: "dall-e-3",
      prompt: prompt,
      num_images: 1,
      size: "1024x1024",
      response_format: "url",
    };
    return this.httpService.post(this.URL, body, { headers: headers });
  }
}
