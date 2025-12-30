import { Config, KeystoreInfo } from "./dtos.ts";

const configObj: Config = {
  radioconnectApiBroadcasterUsername: "radioconnect_kebula@radioplayer.org",
  radioconnectApiBroadcasterPassword: "3321e7f4-7a30-4371-af86-8c522bbeb26f",
  radioconnectBaseUrl:
    "https://radioconnect.radioplayer.cloud/radioconnect/v1/",
  configUrl: "https://whitelabel-cms-dev.s3.eu-west-1.amazonaws.com/",
  didomiApiKey: "",
  didomiNoticeId: "",
  applicationId: "org.radioplayer.whitelabel.rtl",
  applicationName: "RTL Demo",
  whiteLabelGeneratedId: "20",
  versionCode: "1",
  versionName: "1.0.0",
  featureSearchEnabled: false,
  featureDidomiEnabled: false,
  accentColor: "#7F3ACD",
  splashScreenURI: "",
  iconURI:  "",
};

const keyStoreObj: KeystoreInfo = {
  jksURI: "",
  keystoreAlias: "whitelabelautomotivekey",
  storePassword: "store_password",
  keyPassword: "key_password",
  secretManagerRef: ""
}



export { configObj, keyStoreObj };
