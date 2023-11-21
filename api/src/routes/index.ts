import { Router } from "express";
const ContactController = require('../app/controllers/ContactController')

const router = Router();



router.get('/', () => console.log('Hello, World!'))
router.post('/contact', ContactController.store);
router.get('/contacts', ContactController.index);
router.get('/contact/:id', ContactController.show);
router.put('/contact/:id', ContactController.update);
router.delete('/contact/:id', ContactController.delete);

module.exports = router;