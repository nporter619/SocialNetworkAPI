const router = require('express').Router();

router.get('/test', (req, res) => {
  res.json({ message: 'User route test is successful!' });
});

module.exports = router;
