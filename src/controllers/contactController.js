const Contact = require('../models/contactModel');

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.json({ message: 'Contacto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
