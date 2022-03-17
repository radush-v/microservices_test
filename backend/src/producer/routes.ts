import express from 'express';
import { sendRabbitMq } from './produce';

const router = express.Router();

router.post('/send', (req, res) => {
    if (req.body.fileUrl) {
        try {
            sendRabbitMq(req.body);
            res.sendStatus(200);
        }
        catch {
            res.sendStatus(500);
        }
    }
    else{
        res.sendStatus(400);
    }
})

export { router };

