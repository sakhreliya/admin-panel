const Admin = require('../models/admin.Model');

const getAllAdmins = async () => {
    return await Admin.find();
};

const getAdminById = async (id) => {
    return await Admin.findById(id);
};

const createNewAdmin = async (adminData) => {
    const admin = new Admin(adminData);
    return await admin.save();
};

const updateAdminById = async (id, adminData) => {
    return await Admin.findByIdAndUpdate(id, adminData, { new: true });
};

const deleteAdminById = async (id) => {
    return await Admin.findByIdAndDelete(id);
};

module.exports = {
    getAllAdmins,
    getAdminById,
    createNewAdmin,
    updateAdminById,
    deleteAdminById
};
