import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./routes/ivuze.route.js";
import errorhandling from "./middleware/errorhandler.js";
import routerV from "./routes/vendor.js";
import Hrouter from "./routes/hosiptal.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import pages from "./pages.js";

const app = express();

const port = 4000;
const db =
  "mongodb+srv://Mariya:KKXp3IWxu7Sbp5zi@cluster0.fslpg5p.mongodb.net/IVUZE_App";
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("components"));

app.use(pages);
app.use(router);
app.use(routerV);
app.use(Hrouter);

mongoose.connect(db);
try {
  console.log("DB connected successfully");
  app.listen(port, () => {
    console.log(`server is running on port ${port} .... `);
  });
} catch (err) {
  console.log(err);
}

app.use(errorhandling);
