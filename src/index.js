import express from 'express';
import  {PORT} from './config/server-config.js';
// import logger from './config/logger-config.js';
import swaggerDocs from './config/swagger.js';
import  apiRoutes  from './routes/index.js';
import cors from 'cors';

const app = express();
console.log("Before swagger");
swaggerDocs(app);
console.log("After swagger");


const corsOptions = {
    origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
   
}


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));




app.use('/api',apiRoutes);


app.listen(PORT, async ()=>{
    console.log(`Server is running on port : ${PORT}`);
    console.log(`Swagger is running on ${PORT}`);
    
   
    
});


