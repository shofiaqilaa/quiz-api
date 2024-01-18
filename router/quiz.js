const quizController = require('../controllers/quiz');
const router = require('express').Router();
const { verifyToken } = require("../middlewares/authJwt");

router.post('/', [verifyToken],quizController.create);
router.get('/', quizController.getAll);
router.get('/:id', quizController.findOne);
router.put('/:id',[verifyToken], quizController.update);
router.delete('/:id',[verifyToken], quizController.delete);
router.get('/category/:id', quizController.getByCategoryId);
router.get('/level/:id', quizController.getByLevelId);

module.exports = router;