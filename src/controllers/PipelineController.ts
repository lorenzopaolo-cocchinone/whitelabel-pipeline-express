import { Request, Response } from "express";
import { configObj, keyStoreObj } from "../models/mocks.ts";
import { Config, KeystoreInfo } from "../models/dtos.ts";

export const getApplicationConfig = (req: Request, res: Response) => {
  const config: Config = { ...configObj };
  const baseUrl = `${req.protocol}://${req.get("host")}/resources/${
    config.applicationId
  }`;
  config.iconURI = `${baseUrl}/icon.png`;
  config.splashScreenURI = `${baseUrl}/splash.gif`;

  res.json(config);
};


/**
 * Use this in folder org.radioplayer.whitelable.rtl
 * 
 keytool -genkeypair \
  -alias whitelabelautomotivekey \
  -keyalg RSA \
  -keysize 4096 \
  -validity 3650 \
  -keystore keystore.jks \
  -storetype JKS \
  -storepass store_password \
  -keypass key_password \
  -dname "CN=demo.internal, OU=Engineering, O=Acme Inc, L=Torino, S=Piemonte, C=IT"
 * 
 */
export const getKeyStore = (req: Request, res: Response) => {
  const { applicationId } = req.params;

  const keystoreInfo: KeystoreInfo = { ...keyStoreObj };
  const baseUrl = `${req.protocol}://${req.get(
    "host"
  )}/resources/${applicationId}`;
  keystoreInfo.jksURI = `${baseUrl}/keystore.jks`;

  res.json(keystoreInfo);
};
