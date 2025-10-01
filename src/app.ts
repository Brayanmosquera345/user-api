import express from "express";
import type { Express } from "express";
import cors from "cors";
import { setupSwagger } from '@/utils/docs/swagger.js'
import API_PREFIX from '@/config/api.js'

//rutas
import userRoutes from '@/modules/users/user.route.js'

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(`${API_PREFIX}/users`, userRoutes)
setupSwagger(app)

export default app;
