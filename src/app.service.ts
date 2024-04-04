import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is Shanto, learning NestJs!Super Cool, right!';
  }
}
