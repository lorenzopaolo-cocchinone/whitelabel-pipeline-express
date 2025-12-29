import express from "express";
import { authMiddleware } from "./security.ts";
import { handleWebhook } from "./controllers/WebhookController.ts";
import {
  getApplicationConfig,
  getCertificateInfo,
} from "./controllers/PipelineController.ts";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/pipeline/application-config", authMiddleware, getApplicationConfig);
app.get("/pipeline/certificate-info", authMiddleware, getCertificateInfo);
app.post("/webhook/pipeline/", authMiddleware, handleWebhook);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
