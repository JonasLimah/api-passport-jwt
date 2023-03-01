import {Router} from 'express';

import * as endPoint from '../Controller/apiController'

export const router = Router();

router.get('/ping',endPoint.ping);
router.post('/login',endPoint.login);