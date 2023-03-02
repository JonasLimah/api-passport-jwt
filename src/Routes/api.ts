import {Router} from 'express';
import {privetPassport} from '../Config/passport';


import * as endPoint from '../Controller/apiController'

export const router = Router();

router.get('/ping',endPoint.ping);
router.get('/list',privetPassport,endPoint.list);
router.post('/login',endPoint.login);