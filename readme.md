# User API

API de gestión de usuarios construida con **Express**, **Prisma** y **TypeScript**.  

## Tecnologías

- Node.js
- TypeScript
- Express
- Prisma
- Zod (validaciones)
- Swagger (documentación de API)
- pnpm (gestor de paquetes)

## Requisitos

- Node.js >= 20
- pnpm

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Brayanmosquera345/user-api.git
cd user-api
````

2. Instalar dependencias con pnpm:

```bash
pnpm install
```

3. Crear archivo de variables de entorno `.env` basado en el ejemplo:

```env
DATABASE_URL="postgresql://postgres:123@localhost:5432/users?schema=public"
PORT=3000
```

## Prisma

### Generar cliente de Prisma

```bash
pnpm prisma:generate
```

### Ejecutar migraciones

```bash
pnpm prisma:migrate
```


### Cargar datos iniciales (seed)

```bash
pnpm prisma:seed
```

Esto ejecutará el archivo `prisma/seed.ts` y poblará la base de datos con datos de prueba.

## Scripts disponibles

| Comando                | Descripción                                          |
| ---------------------- | ---------------------------------------------------- |
| `pnpm dev`             | Inicia el servidor en modo desarrollo con hot-reload |
| `pnpm start`           | Ejecuta el servidor compilado                        |
| `pnpm prisma:generate` | Genera el cliente de Prisma                          |
| `pnpm prisma:migrate`  | Ejecuta migraciones                                  |
| `pnpm prisma:reset`    | Resetea la base de datos                             |
| `pnpm prisma:seed`     | Inserta datos iniciales en la base de datos          |

## Uso

1. Levantar el servidor en modo desarrollo:

```bash
pnpm dev
```

2. Acceder a la API en: `http://localhost:3000`

3. Documentación Swagger disponible en: `http://localhost:3000/docs`


## 🏗️ Estructura del Proyecto y Arquitectura

El proyecto sigue una arquitectura **modular y por capas** (similar a **MVC**), enfocada en la **separación de responsabilidades** para una mejor mantenibilidad y escalabilidad. La lógica está organizada en **Módulos** por cada entidad (ej. `modules/users`).

-----

### Organización de Archivos

```
.
├── src/
│   ├── server.ts         # 🚀 Punto de entrada: Inicializa el servidor Express.
│   ├── app.ts            # Configuración de Express y middlewares globales.
│   ├── client.ts         # Instancia centralizada del Cliente de Prisma.
│   └── modules/          # 📦 Módulos de la aplicación, agrupados por entidad.
│       └── users/
│           ├── dtos/     # Data Transfer Objects (DTOs) para validación de datos.
│           ├── user.route.ts     # Capa de Enrutamiento: Define las rutas de la API.
│           ├── user.controller.ts# 🌐 Capa de Interfaz: Maneja peticiones HTTP, llama al Service.
│           ├── user.service.ts   # 💼 Capa de Negocio: Contiene la lógica central de la aplicación.
│           └── user.repository.ts# 💾 Capa de Datos: Abstracción del acceso a la base de datos (Prisma).
├── prisma/
│   └── schema.prisma     # Esquema de la base de datos y configuración de Prisma ORM.
├── .env                  # Variables de entorno.
└── package.json          # Dependencias y scripts del proyecto.
```

-----

### 🌐 Flujo Arquitectónico

La petición sigue un flujo **claro y unidireccional**:

**`Route` $\rightarrow$ `Controller` $\rightarrow$ `Service` $\rightarrow$ `Repository` (Prisma) $\rightarrow$ DB**

  * El **Controller** solo maneja la solicitud HTTP.
  * El **Service** implementa la lógica de negocio pura.
  * El **Repository** se encarga de la comunicación con la base de datos.
