import exprress from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';    
import dotenv from 'dotenv';

dotenv.config();

const app = exprress();

app.use(exprress.json());



app.use (
    cors({
        origin: 'http://localhost:3000',
        methhods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);