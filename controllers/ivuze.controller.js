const ivuzeModel = require('../models/ivuze.model');

const create = async (req, res, next) => {
    try {
        const { name, email, role, hospitalCategory, password } = req.body;

        var alreadyExists = await ivuzeModel.findOne({ 'email': email });
        console.log(email);
        if (!alreadyExists) {
            const addedUser = await ivuzeModel.create(req.body);

            console.log(addedUser);
            res.status(201).json({
                message: "User added successfully",
                addedUser
            });
        } else {
            res.status(401).send({ message: "This user already exists", error: console.error.message });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export { create };
