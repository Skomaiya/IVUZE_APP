import ivuzeModel from "../model/ivuze.model.js";
const ivuzeController = {
     create : async (req, res, next) => {
        try {
          
    
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
    },
    
     update : async (req, res, next) => {
        try {
            var updatedUser = await ivuzeModel.findOneAndUpdate({ _id: req.query.id }, req.body);
            var user = await ivuzeModel.findOne(updatedUser._id);
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    
     list : async (req, res, next) => {
        try {
            var users = await ivuzeModel.find({});
            res.status(200).json({ users });
        } catch (error) {
            res.status(500).send("Error in listing users");
        }
    },
    
    findByFullName : async (req, res, next) => {
        try {
            console.log(req.query);
            let userName = req.query.name;
            var foundUser = await ivuzeModel.findOne({ name: userName });
            res.status(302).json({
                data: foundUser,
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    findById : async (req, res, next) => {
        try {
            let userId = req.query.id;
            var foundUser = await ivuzeModel.findById({ _id: userId });
            res.status(200).json({
                user: foundUser
            });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    
     findByNationalId : async (req, res, next) => {
        try {
            let userId = req.body.nationalId;
            var foundUser = await ivuzeModel.findOne({ nationalId: userId });
            res.status(200).json({
                user: foundUser
            });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    
    remove : async (req, res, next) => {
        try {
            var deletedUser = await ivuzeModel.findByIdAndDelete(req.query.id);
            if (deletedUser) {
                res.status(200).json({ message: "Deleted!" });
            } else {
                res.status(400).json({ message: "User not found!" });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
}

export default ivuzeController