const app = require('./src/app');
const ConnectionDB = require('./src/Database/db');

app.listen(5000,async ()=> {
    console.log('Server is Listening on Port 5000...');
    await ConnectionDB();
})

