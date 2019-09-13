// Core
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Routes
import * as routes from './routes';

// Initialize DB connection
import './db';

const app = express();

app.use(cors());
app.use(
    bodyParser.json({
        limit: '10kb',
    }),
);

app.use('/api/todos', routes.todos);

app.use('*', (req, res) => {
    res.status(404).json({
        message: `Can not find right route for method ${req.method} and path ${req.originalUrl}`,
    });
});

export { app };
