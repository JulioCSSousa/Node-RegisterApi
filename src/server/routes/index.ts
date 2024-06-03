import { Router } from 'express';
import { CitiesController } from '../../controllers/cities';
import { createBodyValidate } from '../../Exceptions/Exceptions';

const router = Router();


router.get('/', (_, res) => {
    return res.send("Hello dev");
});

router.post('/cities', createBodyValidate, CitiesController.create);




export {router}