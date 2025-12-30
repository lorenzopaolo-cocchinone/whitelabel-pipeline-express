enum BuildStatus {
  Requested = "Requested",     // Build requested from CMS, EC2 Spot instance not yet scheduled/launched.
  Pending = "Pending",         // Build waiting for an EC2 SPOT to be assigned.
  Started = "Started",         // EC2 Spot instance is running and the build process has begun.
  Preparing = "Preparing",     // Create and update files for start the build
  Building = "Building",       // App compilation in progress.
  Signing = "Signing",         // APK/AAB is being digitally signed.
  Publishing = "Publishing",   // Uploading the build to the store.
  Completed = "Completed",     // Build completed successfully and published.
  Failed = "Failed",           // Build or publishing failed.
  Cancelled = "Cancelled"      // Build was manually cancelled or timed out.
}

export { BuildStatus }