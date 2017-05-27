// establish variables
const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const app = express();
const port = process.env.PORT || 3000;

// set view engine to EJS
app.set('view engine', 'ejs');

// render index.ejs
app.get('/', function(req, res) {
  res.render('index');
});

// post route
app.post('/get-file-size', upload.single('file'), function(req, res) {
  let output = { 'size': req.file.size }
  res.json(output);
});

// start server
app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
