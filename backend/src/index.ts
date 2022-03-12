import { consumer } from './consumer/consumer';
import { producer } from './producer/producer';

consumer.listen(process.env.CONSUMER_PORT, () => {
    console.log('Consumer is running...');
})

producer.listen(process.env.PRODUCER_PORT, () => {
    console.log('Producer is running...')
})