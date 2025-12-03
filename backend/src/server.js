const app = require('./app');
const env = require('./config/env');

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});