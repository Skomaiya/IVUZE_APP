import jwt from 'jsonwebtoken';
import ivuzeModel from '../model/ivuze.model.js'; // Import your Mongoose model

const authenticateHospital = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await ivuzeModel.findById(decoded.userId);

        if (!user) {
            return res.status(403).json({ message: "Unauthorized access." });
        }

        // Check user's role
        if (user.role === 'hospital') {
            req.user = user; // Attach the user object to the request
            next(); // Allow hospital user to proceed
        } else {
            // Redirect non-hospital user to home page
            res.redirect('/home'); // Adjust the redirect path as needed
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Authentication failed." });
    }
};

export default  authenticateHospital ;
