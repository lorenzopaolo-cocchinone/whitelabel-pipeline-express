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
};

type CertificateInfo = {
  commonName: string;
  organizationUnit: string;
  organizationName: string;
  locality: string;
  state: string;
  isoCountry: string;
};

export type { Config, CertificateInfo, PipelineEvent };
