const router = require('express').Router();
const Thought = require('../../models/Thought');

// GET all thoughts
router.get('/', async (req, res) => {
  try {
    const allThoughts = await Thought.find({});
    res.json(allThoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET single thought by ID
router.get('/:id', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST new thought
router.post('/', async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT update thought
router.put('/:id', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedThought) return res.status(404).json({ message: 'Thought not found' });
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE thought
router.delete('/:id', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) return res.status(404).json({ message: 'Thought not found' });
    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
