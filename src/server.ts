import cors from "cors";
import { configDotenv } from "dotenv";
import express from "express";
import healthRoute from "./controller/health/routes";

configDotenv();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use(healthRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
