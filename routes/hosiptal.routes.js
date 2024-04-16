import { Router } from "express";
import hospitalController from "../controllers/hospital.controller.js";
import jwt from "jsonwebtoken";
import upload from "../middleware/upload.middleware.js";

const Hrouter = Router();

Hrouter.get("/hospital", async (req, res, next) => {
  try {
    const hospitals = await hospitalController.hospitalList(req, res, next);

    res.render("hospital", { hospitals });
  } catch (error) {
    next(error); // Pass any errors to the error handling middleware
  }
});

// Route to handle hospital registration
Hrouter.post(
  "/registerhospital",
  upload.single("filename"),
  hospitalController.createHospital
);
Hrouter.get("/dashboard", async (req, res, next) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.token) {
      return res.sendStatus(401);
    }
    const secretKey = "dfbfdyerfbahjghfbsh";
    const payload = jwt.verify(cookies.token, secretKey);
    res.render("dashboard", {
      user_id: payload?.user_id,
      email: payload?.email,
    });
  } catch (error) {
    next(error);
  }
});
Hrouter.delete("/remove",hospitalController.hospitaldeleteById)
Hrouter.get("/list",hospitalController.hospitalList)

export default Hrouter;
