import express from 'express';
import { sendRabbitMq } from './produce';

const router = express.Router();

router.post('/send', (req, res) => {
    if (req.body.fileUrl) {
        sendRabbitMq(req.body);
        res.sendStatus(200);
    }
    res.sendStatus(400);
})

export { router };

