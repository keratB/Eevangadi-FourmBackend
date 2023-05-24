const router = require('express').Router();
const { solveQuestion, getAnswerByQuestionId } = require('./answer.controller');

router.post('/', solveQuestion);
router.get('/:id', getAnswerByQuestionId);

module.exports = router;