import express from 'express';
import db from './models/index.js';
import  {PORT} from './config/server-config.js';
// import logger from './config/logger-config.js';

import  apiRoutes  from './routes/index.js';



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api',apiRoutes);


app.listen(PORT, async ()=>{
    console.log(`Server is running on port : ${PORT}`);
    // logger.info("Server is running ", {});
    const {City, Airport} = db;
    // const city = await City.findByPk(4);
    // console.log( city);
    // const airport = await Airport.create({name : 'Indra ghandhi airport', code : 'DEL', cityId : 4});
    // console.log( airport);
    // await City.destroy({
    //     where:{
    //         id : 4
    //     }
    // })
});


