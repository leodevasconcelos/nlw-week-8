import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json({ limit: '2mb' }))
app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3080, () => {
    console.log('Server is running on port: 3080');
});