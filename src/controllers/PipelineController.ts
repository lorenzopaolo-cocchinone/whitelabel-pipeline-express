import { Request, Response } from "express";
import { certificateInfo, configObj } from "../models/mocks.ts";
import { Config } from "../models/dtos.ts";

export const getApplicationConfig = (req: Request, res: Response) => {
  const config: Config = { ...configObj };
  const baseUrl = `${req.protocol}://${req.get("host")}/resources/${config.applicationId}`;
  config.iconURI = `${baseUrl}/icon.png`;
  config.splashScreenURI = `${baseUrl}/splash.gif`;

  res.json(config);
};

export const getCertificateInfo = (req: Request, res: Response) => {
  res.json(certificateInfo);
};
