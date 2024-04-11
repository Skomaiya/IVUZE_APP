import vendorController from "../controllers/vendor.js";

import  Router  from "express";
const routeV = Router()

routeV.post("/registerVender", vendorController.createVendor);

export default routeV;