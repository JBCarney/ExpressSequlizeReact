import {Router} from 'express';
import db from '../models/index';

let router=Router();
router.get('/',(request,response)=>{
	db.Employee.findAll({}).then(function(e){
		response.json(e);
	});
});
export default router;