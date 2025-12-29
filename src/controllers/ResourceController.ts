import { Request, Response } from "express";
import path from "node:path";

export const getResource = (req: Request, res: Response) => {
  const { applicationId, filename } = req.params;
  const resourcePath = path.join(
    process.cwd(),
    "resources",
    applicationId,
    filename
  );
  res.sendFile(resourcePath, (err) => {
    if (err) {
      res.status(404).json({ error: "Resource not found" });
    }
  });
};
