import { Request, Response } from "express";
import { PipelineEvent } from "../models/dtos.ts";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { BuildStatus } from "../constants/PipelineStatus.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, "../../out");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

export const handleWebhook = (req: Request, res: Response) => {
  const payload: PipelineEvent = req.body;
  const logFilePath = path.join(outDir, `${payload.jobId}.log`);

  if (!Object.values(BuildStatus).includes(payload.status)) {
    console.error(`Invalid status for job ${payload.jobId}: ${payload.status}`);
    return res.status(400).json({ error: "Invalid status" });
  }

  let logEntry = `${new Date().toISOString()} - Update received for: ${
    payload.jobId
  }, status: ${payload.status} updatedAt: ${payload.updatedAt}`;
  if (
    payload.message !== undefined &&
    payload.message !== null &&
    payload.message !== ""
  ) {
    logEntry += `, message: ${payload.message}`;
  }
  logEntry += "\n";

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error(`Error writing log for job ${payload.jobId}:`, err);
    }
  });

  res.status(200).json({ received: true });
};
