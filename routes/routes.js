const { Router } = require('express');
const controller = require('../controllers/controller');

const router = Router();

router.get('/list', controller.get_list);
router.get('/:id', controller.get_todo);
router.post('/:id', controller.post_todo);
router.put('/:id', controller.put_todo);
router.patch('/:id', controller.patch_todo);
router.delete('/:id', controller.delete_todo);

module.exports = router;