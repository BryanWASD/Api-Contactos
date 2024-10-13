const express = require('express');
const { getContacts, createContact, updateContact, deleteContact } = require('../controllers/contactController.js');

const router = express.Router();

router.get('/contacts', getContacts);
router.post('/contacts', createContact);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

module.exports = router;
