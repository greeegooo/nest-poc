import { INestApplication, ValidationPipe } from "@nestjs/common";

const whitelistPipe = new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
});

export const configPipes = (app: INestApplication) => {

    app.useGlobalPipes(whitelistPipe);
}