import { Router } from 'express';
import mainController from '../controllers/main';
import deptController from '../controllers/departamento';

import checkAuth from '../middlewares/checkAuth'

const router = Router();

// Main controller
router.get('/', mainController.index);
router.get('/about', mainController.about);

router.get('/ui', mainController.ui);
router.get('/create-cookie', mainController.createCookie);
router.get('/clear-cookie', mainController.clearCookie);

router.get('/login', mainController.login);
router.post('/login', mainController.login);
router.get('/logout', mainController.logout);

// Departamento controller

router.get('/dept', checkAuth, deptController.index);
router.get('/dept/create', checkAuth, deptController.create);
router.post('/dept/create',checkAuth, deptController.create);
router.get('/dept/update/:id', checkAuth, deptController.update);
router.post('/dept/update/:id', checkAuth, deptController.update);
router.get('/dept/:id', checkAuth, deptController.read);
router.post('/dept/:id', checkAuth, deptController.remove);
router.post('/dept/:id/remove',checkAuth,  deptController.remove);


export default router;
