import express from 'express';

import  {PORT} from './config/server-config.js';
// import logger from './config/logger-config.js';

import  apiRoutes  from './routes/index.js';



const app = express();

app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
    // logger.info("Server is running ", {});
});


