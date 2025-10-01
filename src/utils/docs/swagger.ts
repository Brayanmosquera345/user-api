import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Users API",
            version: "1.0.0",
            description: "API RESTful para la gestión de usuarios con CRUD completo.",
            termsOfService: "http://example.com/terms",
        },
    },
    apis: ["./src/modules/**/*.route.ts"],
};
const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

