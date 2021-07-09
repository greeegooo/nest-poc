import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const configSwagger = (app: INestApplication) => {

    const config = new DocumentBuilder()
        .setTitle('BaaS API Gateway')
        .setDescription('Banco Galicia - Banking as a Service')
        .setVersion('v0.0.1')
        .build();

    const doc = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('swagger', app, doc); 
};