import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json({ limit: '2mb' }))
app.use(cors(
    { origin: '*' }
));
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3080, () => {
    console.log('Server is running');
});