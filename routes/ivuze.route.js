import ivuzeController from "../controllers/ivuze.controller.js";
import authonticationhospital from "../middleware/authonticationhospital.js";
import  Router  from "express";
const router = Router();

router.post("/register", ivuzeController.signup);
 router.post("/login",ivuzeController.loginHospital); //
 
export default router;