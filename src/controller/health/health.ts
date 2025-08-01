import type { Request, Response } from "express";
import packageJson from "../../../package.json" assert { type: "json" };

function healthCheck(req: Request, res: Response) {
  const { version, name } = packageJson;
  res
    .status(200)
    .json({
      status: "ok",
      projectName: name,
      version,
      environment: process.env.MODE_ENV,
    });
}

export const healthController = {
  healthCheck,
};
