import ivuzeModel from "../model/ivuze.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const ivuzeController = {
  signup: async (req, res) => {
    try {
      console.log(req.body);
      const { hospital_name, hospital_type, email, password } = req.body;

      // Check if all required fields are provided
      if (!(hospital_name && email && password)) {
        return res
          .status(400)
          .json({
            message: "All fields are required for hospital registration",
          });
      }

      // Check if hospital already exists
      const existingHospital = await ivuzeModel.findOne({ hospital_name });
      if (existingHospital) {
        return res.status(400).json({ message: "Hospital already exists" });
      }

      // Create new hospital
      const newHospital = await ivuzeModel.create({
        name: hospital_name, // Use 'name' instead of 'hospital_name'
        hospital_type: req.body["hospital-type"], // Access 'hospital-type' using bracket notation
        email,
        password,
      });

      // Respond with success message and hospital data

      res.redirect("/login");
    } catch (error) {
      console.error("Hospital registration error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  loginHospital: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Debugging: Log the email received from the request body
      console.log("Login attempt with email:", email);

      // Find hospital by email
      const hospitalAvailable = await ivuzeModel.findOne({ email });

      // Debugging: Log the hospitalAvailable object to inspect
      console.log("Hospital found:", hospitalAvailable);

      if (!hospitalAvailable) {
        return res.status(404).json({ message: "Hospital not registered" });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(
        password,
        hospitalAvailable.password
      );

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // Generate token
      const secretKey = "dfbfdyerfbahjghfbsh";
      const token = jwt.sign(
        { user_id: hospitalAvailable._id, email: hospitalAvailable.email },
        secretKey,
        { expiresIn: "2h" }
      );

      // Set cookie with token
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res
        .cookie("token", token, options)
        .status(200)
        .redirect("dashboard")
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: async (req, res) => {
    try {
      const updatedUser = await ivuzeModel.findOneAndUpdate(
        { _id: req.query.id },
        req.body,
        { new: true }
      );
      res.status(200).json({ user: updatedUser });
    } catch (error) {
      console.error("Update error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  list: async (req, res) => {
    try {
      const users = await ivuzeModel.find({});
      res.status(200).json({ users });
    } catch (error) {
      console.error("List error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  findByFullName: async (req, res) => {
    try {
      const { name } = req.query;
      const foundUser = await ivuzeModel.findOne({ name });
      if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ user: foundUser });
    } catch (error) {
      console.error("Find by full name error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  findById: async (req, res) => {
    try {
      const { id } = req.query;
      const foundUser = await ivuzeModel.findById(id);
      if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ user: foundUser });
    } catch (error) {
      console.error("Find by ID error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  findByNationalId: async (req, res) => {
    try {
      const { nationalId } = req.body;
      const foundUser = await ivuzeModel.findOne({ nationalId });
      if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ user: foundUser });
    } catch (error) {
      console.error("Find by national ID error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  remove: async (req, res) => {
    try {
      const deletedUser = await ivuzeModel.findByIdAndDelete(req.query.id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      console.error("Remove error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default ivuzeController;
