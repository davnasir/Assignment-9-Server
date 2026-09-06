const express = require('express');
const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
    res.send('helllo Nasir ')
}),
    app.get('/nasir', (req, res) => {
        res.send('Bangladesh ')
    })


app.listen(port, () => {
    console.log(`hello Server running now ${port}`);
})
