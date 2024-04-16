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
  "mongodb://localhost:27017/IVUZE_App";
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

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const dbConnection = mongoose.connection;
  dbConnection.on("error", console.error.bind(console, "MongoDB connection error:"));
  dbConnection.once("open", () => {
    console.log("Connected to MongoDB successfully");
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });

app.use(errorhandling);
