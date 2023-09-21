import Pool from "pg-pool";

export const postgresPool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: "5432",
  database: "postgres",
});
