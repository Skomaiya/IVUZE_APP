const errorhandling = (err,req,res,next) => {
    const errmsg = err.message;
    const errStatus = err.status
    res.status(errStatus || 500).json({success:false,message:errmsg,stack: process.env.NODE_ENV === "development" ? err.stack : {}});
}
export default errorhandling;