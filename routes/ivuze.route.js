import ivuzeController from "../controllers/ivuze.controller.js";
import  Router  from "express";
const router = Router();

router.post("/register", ivuzeController.create);
export default router;