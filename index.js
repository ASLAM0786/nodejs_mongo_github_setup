import mongooes from 'mongoose'

import app from './app.js'

(async ()=>{
    try {
        mongooes.connect('mongodb://localhost:27017/githubsetup');
        console.log('DB CONNECTED');
        const onListing = ()=>{
            console.log('Listing on port 5000');
        }

        app.listen(5000,onListing)
    } catch (error) {
        console.log(error.message);
        throw error;
    }
})()