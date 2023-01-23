import express from 'express';
import UserController from './controllers/UserController';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send(`Server running at ${PORT}`));

app.get('/users', UserController.find)

app.listen(3000);