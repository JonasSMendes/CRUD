import { Router } from 'express';

import * as todoController from '../controller/todoController';

const router = Router();


router.get('/', todoController.all)
router.post('/todo', todoController.add)
router.put('/todo/:id', todoController.update)
router.delete('/todo/:id', todoController.remove)

export default router;