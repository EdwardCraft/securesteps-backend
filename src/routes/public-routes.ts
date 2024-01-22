import { Router } from "express";
import CrimeRoutes from "./crime";

const router = Router();

router.use("/crime", CrimeRoutes);

export default router;
