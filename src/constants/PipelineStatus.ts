enum BuildStatus {
  Requested = "Requested",     // Build requested from CMS, EC2 Spot instance not yet scheduled/launched.
  Pending = "Pending",         // Build waiting for an EC2 SPOT to be assigned.
  Init = "Init",               // Repository and environment setup in progress.
  Started = "Started",         // EC2 Spot instance is running and the build process has begun.
  Building = "Building",       // App compilation in progress.
  Signing = "Signing",         // APK/AAB is being digitally signed.
  Publishing = "Publishing",   // Uploading the build to the store.
  Completed = "Completed",     // Build completed successfully and published.
  Failed = "Failed",           // Build or publishing failed.
  Cancelled = "Cancelled"      // Build was manually cancelled or timed out.
}

export { BuildStatus }