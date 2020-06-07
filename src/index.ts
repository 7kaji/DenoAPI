import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/router.ts";
import { errorHandler } from "./exceptions/errorHandler.ts";
import logger from './middlewares/logger.ts';

const app = new Application();

// order of execution is important;
// Logger
app.use(logger.logger);
app.use(logger.responseTime);

// Routing
app.use(router.routes());
app.use(router.allowedMethods());

// Exception
app.use(errorHandler);

await app.listen({ port: 8000 });
