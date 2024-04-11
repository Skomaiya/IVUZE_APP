import  Router  from "express";
import hospitalController from "../controllers/hospital.controller.js";
const Hrouter =  Router();

Hrouter.post("/registerhospital", hospitalController.createHospital);

export default Hrouter;