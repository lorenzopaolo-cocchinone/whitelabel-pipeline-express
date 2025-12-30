import { BuildStatus } from "../constants/PipelineStatus.ts";

type PipelineEvent = {
  jobId: string;
  status: BuildStatus;
  updatedAt: number;
};

type Config = {
  radioconnectApiBroadcasterUsername: string;
  radioconnectApiBroadcasterPassword: string;
  radioconnectBaseUrl: string;
  configUrl: string;
  didomiApiKey: string;
  didomiNoticeId: string;
  applicationId: string;
  applicationName: string;
  whiteLabelGeneratedId: string;
  versionCode: string;
  versionName: string;
  featureSearchEnabled: boolean;
  featureDidomiEnabled: boolean;
  accentColor: string;
  iconURI: string;
  splashScreenURI: string;
};

type KeystoreInfo = {
  jksURI: string;
  keystoreAlias: string;
  storePassword: string;
  keyPassword: string;
  secretManagerRef: string;
};

export type { Config, KeystoreInfo, PipelineEvent };
