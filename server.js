const app = require('./index');
const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
    if (process.env.NODE_ENV == 'production') {
        console.log(`${process.env.SERVER}`);
    } else {
        console.log(`http://localhost:${port}`);
    }
})