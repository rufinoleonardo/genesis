import "reflect-metadata";
import express = require("express");
import cors = require("cors");
import { AppDataSource } from "./db/data-source";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3333;

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server running at the port ${port}. http:\\localhost:${port}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
