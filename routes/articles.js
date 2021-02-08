const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const articlesController = require('../controllers/articles.js');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.get('/', asyncHandler(articlesController.getCollection));
router.get('/:id', asyncHandler(articlesController.findOne));

module.exports = router;
