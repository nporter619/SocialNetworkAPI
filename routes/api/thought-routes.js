const router = require('express').Router();
const { Thought } = require('../../models');

// Add CRUD routes for Thought here (Create, Read, Update, Delete)

// Sample GET route to fetch all thoughts
router.get('/', async (req, res) => {
  try {
    const allThoughts = await Thought.find({});
    res.json(allThoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
