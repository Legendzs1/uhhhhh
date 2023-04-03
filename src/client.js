import { createClient } from 'redis';

export default function clientConnection() {
    // Create client 
    const client = createClient();
    client.on('error', err => console.log('Redis Client Error', err));
    
    // Connect to client
    client.connect();

    return client;
}