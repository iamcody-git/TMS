import { Router } from "express";

import { healthcheck } from "../controllers/healthCheckController";

const  router = Router()

router.route("/").get(healthcheck)

export default router