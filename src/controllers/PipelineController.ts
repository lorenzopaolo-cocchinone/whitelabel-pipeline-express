import { Request, Response } from "express";
import { certificateInfo, configObj } from "../models/mocks.ts";

export const getApplicationConfig = (req: Request, res: Response) => {
  res.json(configObj);
};

export const getCertificateInfo = (req: Request, res: Response) => {
  res.json(certificateInfo);
};
