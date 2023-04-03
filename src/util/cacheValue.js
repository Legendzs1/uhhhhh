
async function cacheValue(client, value){
    await client.set('pancakes', value);
}

export default cacheValue;