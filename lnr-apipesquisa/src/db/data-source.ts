import "reflect-metadata";
import { DataSource } from "typeorm";
import Analista from "./models/Analista";

// TODO: create database bdpesquisa;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "121234",
  database: "bdpesquisa",
  synchronize: true,
  logging: true,
  entities: [Analista],
  subscribers: [],
  migrations: [],
});
