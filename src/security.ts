import { Request, Response, NextFunction } from "express";

const FAKE_TOKEN = "7f3c9a1e8d4b2f6a9c0e5b7d1a4f8c2e";
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      error: "Missing Authorization header",
    });
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || token !== FAKE_TOKEN) {
    return res.status(401).json({
      error: "Invalid Authorization header",
    });
  }

  next();
};

export { authMiddleware };
