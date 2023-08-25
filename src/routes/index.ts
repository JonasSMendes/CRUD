import { Router } from 'express';

import * as todoController from '../controller/todoController';

const router = Router();


router.get('/', todoController.all);
router.post('/novopost', todoController.add)

//Atualizando dados
router.post('/tarefa/:id/update', todoController.update)
//excluir
router.get('/tarefa/:id/excluir', todoController.remove);

export default router;