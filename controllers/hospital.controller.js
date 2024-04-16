// Import the hospital model using ES Modules syntax
import hospital from "../model/hospital.model.js";

// Function to create a new hospital
async function createHospital(req, res, next) {
  try {
    const { body, file } = req;

    // Check if a file (image) was uploaded
    if (!file) {
      return res.status(400).json({
        message: "Please upload an image",
      });
    }

    // Extract file details
    const { buffer, originalname } = file;

    // Convert the buffer to base64
    const fileContent = buffer.toString("base64");

    const newHospital = await hospital.create({
      ...body,
      gallery: [
        {
          image_id: `${originalname}-${new Date().getTime()}`,
          image_url: "NAN",
          image_64x: fileContent,
        },
      ],
    });
    return res.status(201).redirect("/hospital");
    //   .json({
    //     message: "Hospital created successfully",
    //     hospital: newHospital,
    //   });
  } catch (err) {
    next(err);
  }
}

// Function to retrieve a list of hospitals
async function hospitalList(req, res, next) {
  try {
    const hospitals = await hospital.aggregate([
      {
        $project: {
          hospital_name: 1,
          location: 1,
          contact: 1,
          email: 1,
          capacity: 1,
          image_url: { $arrayElemAt: ["$gallery.image_url", 0] },
          image_64x: { $arrayElemAt: ["$gallery.image_64x", 0] },
        },
      },
    ]);

    res.render("hospital", { hospitals });
  } catch (error) {
    next(error);
  }
}

// Function to retrieve a hospital by ID
async function hospitalListById(req, res, next) {
  try {
    const foundHospital = await hospital.findById(req.params.id);
    if (!foundHospital) {
      return res.status(404).send("Hospital not found");
    }
    res.render("hospital", { hospital: foundHospital });
  } catch (err) {
    next(err);
  }
}

async function hospitaldeleteById(req, res, next) {
  try{
    const deleteHospital = await hospital.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hospital deleted successfully" });

  }
  catch(err){
    next(err);
  }
}

// Export the functions as an object with default export
export default {
  createHospital,
  hospitalList,
  hospitalListById,
  hospitaldeleteById,
  hospitalList,
};
