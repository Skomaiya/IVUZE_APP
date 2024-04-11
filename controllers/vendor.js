import vendors from "../model/vendor.js";

async function createVendor(req, res, next) {
  try {
    const vendor = await vendors.create(req.body);
    res.setHeader("Content-Type", "application/json");
    console.log(vendor)
    res.status(200).json({ message: "vendor created successfully" });
  } catch (err) {
    next(err);
  }
}
async function vendorList(req, res, next) {
  try {
    const vendor = await vendors.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ vendors: vendors });
  } catch (err) {
    next(err);
  }
}
async function vendorListById(req, res, next) {
  try {
    const vendor = await vendors.findById(req.params.id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ vendors: vendors });
  } catch (err) {
    next(err);
  }
}
async function vendorUpdate(req, res, next) {
  try {
    const id = req.params.id;
    const vendor = await vendors.findById(id, newData);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ message: "success updating vendor" });
  } catch (err) {
    next(err);
  }
}
async function vendorDelete(req, res, next) {
  try {
    const id = req.params.venue;
    const vendor = await vendors.findById(id);
    res.status(200).json({ message: "success deleting vendor" });
  } catch (err) {
    next(err);
  }
}
const vendorController = {
  createVendor,
  vendorList,
  vendorListById,
  vendorUpdate,
  vendorDelete,
};
export default vendorController;
