import { Client } from "https://deno.land/x/mysql/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = await new Client().connect({
  hostname: Deno.env.get('DB_HOSTNAME'),
  username: Deno.env.get('DB_USERNAME'),
  db: Deno.env.get('DB_NAME'),
  password: Deno.env.get('DB_PASSWORD'),
  port: Number(Deno.env.get('DB_PORT')),
  poolSize: Number(Deno.env.get('DB_POOL_SIZE')), // connection limit
});

export default client;
