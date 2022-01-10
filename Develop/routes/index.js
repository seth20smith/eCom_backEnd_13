const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);


router.use((req, res) => {
  // check if sending message always
  res.send("<h1>Wrong Route!</h1>")
  res.status(404).end();
});



module.exports = router;