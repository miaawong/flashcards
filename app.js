const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('<h1>treehouse</h1>');

});
app.get('/hello', (req, res) => {
    res.send('<h1>HELLO WORLD</h1>');

});
app.listen(3000, () => {
    console.log('the application is running on localhost:3000');
}); 