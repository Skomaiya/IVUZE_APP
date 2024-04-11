// Import the hospital model using ES Modules syntax
import hospital from "../model/hospital.model.js";

// Function to create a new hospital
async function createHospital(req, res, next) {
    try {
        const newHospital = await hospital.create(req.body);
        res.status(201).json({ message: 'Hospital created successfully', hospital: newHospital });
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
                    image_url: { $arrayElemAt: ["$gallery.image_url", 0] }
                }
            }
        ]);
        res.render('index', { hospitals });
    } catch (error) {
        next(error);
    }
}

// Function to retrieve a hospital by ID
async function hospitalListById(req, res, next) {
    try {
        const foundHospital = await hospital.findById(req.params.id);
        if (!foundHospital) {
            return res.status(404).send('Hospital not found');
        }
        res.render('hospitals', { hospital: foundHospital });
    } catch (err) {
        next(err);
    }
}

// Export the functions as an object with default export
export default {
    createHospital,
    hospitalList,
    hospitalListById
};
