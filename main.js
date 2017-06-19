let loremIpsum = require("lorem-Ipsum")
let express = require('express');
let app = express();
let text = loremIpsum({
    count: 3,
    units: 'paragraphs',
    format: 'html'
});

app.get('/lorem', function (req, res) {
  res.send(text)
})

app.listen(3000, function (){
  console.log('Example app listening to port 3000!')
})
