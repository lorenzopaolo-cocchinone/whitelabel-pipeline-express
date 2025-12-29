import { CertificateInfo, Config } from "./dtos.ts";

const configObj: Config = {
  radioconnectApiBroadcasterUsername: "radioconnect_kebula@radioplayer.org",
  radioconnectApiBroadcasterPassword: "3321e7f4-7a30-4371-af86-8c522bbeb26f",
  radioconnectBaseUrl:
    "https://radioconnect.radioplayer.cloud/radioconnect/v1/",
  configUrl: "https://whitelabel-cms-dev.s3.eu-west-1.amazonaws.com/",
  didomiApiKey: "",
  didomiNoticeId: "",
  applicationId: "org.radioplayer.whitelabel.demo",
  applicationName: "Demo",
  whiteLabelGeneratedId: "14",
  versionCode: "1",
  versionName: "1.0.0",
  featureSearchEnabled: false,
  featureDidomiEnabled: false,
  accentColor: "#7F3ACD",
  splashScreenURI: "",
  iconURI:  "",
};

const certificateInfo: CertificateInfo = {
  commonName: "Marco Massimale",
  organizationUnit: "IT",
  organizationName: "Acme SRL",
  locality: "Napoli",
  state: "NA",
  isoCountry: "IT",
};

export { configObj, certificateInfo };
