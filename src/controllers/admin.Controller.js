const adminService = require('../services/admin.Service');

const getAllAdmins = async (req, res) => {
    try {
        const admins = await adminService.getAllAdmins();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAdminById = async (req, res) => {
    try {
        const admin = await adminService.getAdminById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNewAdmin = async (req, res) => {
    try {
        const admin = await adminService.createNewAdmin(req.body);
        res.status(201).json(admin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateAdminById = async (req, res) => {
    try {
        const admin = await adminService.updateAdminById(req.params.id, req.body);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(admin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAdminById = async (req, res) => {
    try {
        const admin = await adminService.deleteAdminById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json({ message: 'Admin deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllAdmins,
    getAdminById,
    createNewAdmin,
    updateAdminById,
    deleteAdminById
};
