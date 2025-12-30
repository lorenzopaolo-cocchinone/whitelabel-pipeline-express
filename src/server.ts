import express from "express";
import { authMiddleware } from "./security.ts";
import { handleWebhook } from "./controllers/WebhookController.ts";
import {
  getApplicationConfig,
  getKeyStore,
} from "./controllers/PipelineController.ts";
import { getResource } from "./controllers/ResourceController.ts";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/pipeline/application-config", authMiddleware, getApplicationConfig);
app.get("/resources/:applicationId/:filename", authMiddleware, getResource);
app.get("/pipeline/android/keystore/:applicationId", authMiddleware, getKeyStore);
app.post("/webhook/pipeline/", authMiddleware, handleWebhook);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
