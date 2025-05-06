import express from 'express';

const app = express();

app.get('/login', (req, res) => {
    res.send('Login route');
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
});