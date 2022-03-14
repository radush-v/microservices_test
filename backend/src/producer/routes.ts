import express from 'express';
import { sendRabbitMq } from './produce';

const router = express.Router();

router.post('/send', (req, res) => {
    try {
        sendRabbitMq(req.body);
        res.send('Ok');
    }
    catch (err) {
        res.send(err);
    }
})

export { router };

