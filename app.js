import clientConnection from './src/client.js'


let client = new clientConnection();

client.set('key','value');

const value = await client.get('key');

console.log(value)