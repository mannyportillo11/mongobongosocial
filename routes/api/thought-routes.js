const router = require('express').Router();
const {
    getAllThought,
    addThought,
    removeThought,
    getThoughtById,
    updateThought,
    removeReaction,
    addReaction} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);
router.route('/:thoughtId').get(getThoughtById);
router.route('/:thoughtId').put(updateThought);
router.route('/:userId').post(addThought);
router.route('/:userId/:thoughtId').delete(removeThought);

// Add for reactions
router.route('/:userId/:thoughtId').put(addReaction);
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;