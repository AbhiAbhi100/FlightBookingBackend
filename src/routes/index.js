import express from 'express';


const v1Routes = require('./v1');

const router = express.Router();
router.use('/v1', v1Routes)


export default router
