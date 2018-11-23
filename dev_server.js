const express = require('express')
const app = express();
const path = require("path");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'game','index.html'));
});

// app.use(express.static(__dirname ,'game'));

const game = express.static(path.join(__dirname, 'game'));
const mapImages = express.static(path.join(__dirname, 'game/assets/maps/'));

app.use('/game', game);
app.use('/maps', mapImages);

// app.use( '/' , express.static(path.join(__dirname ,'game','assets','map')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});