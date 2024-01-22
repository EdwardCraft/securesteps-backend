import express, { Request, Response, NextFunction } from "express";

import PublicRoutes from "./routes/public-routes";

const app = express();

app.use("/api/securesteps/", PublicRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
