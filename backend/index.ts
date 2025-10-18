import express from 'express';
import { connectToDb } from "./utils";
import cors from 'cors';
import flashCardsRouter from "./routes/flashCardsRoutes";

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', flashCardsRouter);


connectToDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
