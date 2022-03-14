import { router } from './producer/routes';

import express from 'express';
import bodyParser from 'body-parser';

const producer = express();

producer.use(bodyParser.json());
producer.use(bodyParser.urlencoded({ extended: true }));
producer.use(router);

producer.listen(process.env.PRODUCER_PORT, () => {
    console.log('Producer is running...');
})

export { producer };

