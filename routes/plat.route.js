const express = require('express');
const router = express.Router();

const plat_controller = require('../controllers/plat.controller');

router.post('/create', plat_controller.plat_create);

router.get('/getPlats', plat_controller.getplats);

router.get('/:id', plat_controller.plat_details);

router.put('/:id/update', plat_controller.plat_update);

router.delete('/:id/delete', plat_controller.plat_delete);

module.exports = router;

