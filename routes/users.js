const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const usersController = require('../controllers/users.js');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.post('/', requireRequestBody, asyncHandler(usersController.handlePost));
router.get('/', asyncHandler(usersController.handleGetMany));
router.get('/:id', asyncHandler(usersController.handleGetOne));
router.put(
  '/:id',
  requireRequestBody,
  asyncHandler(usersController.handlePatch)
);
router.delete('/:id', asyncHandler(usersController.handleDeleteOne));

module.exports = router;
