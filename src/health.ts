import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/health', (res: any) => {
    res.sendStatus(200);
});

app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});