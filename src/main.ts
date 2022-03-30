import set from "../set"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || set.SET_PORT;
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, () => console.log(`Server start on ${PORT}`))
}
start();
