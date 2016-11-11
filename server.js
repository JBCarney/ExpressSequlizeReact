import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import db from './server/models/index';
const app = express();
app.set('views', './')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/',(request,response)=>{
	db.Employee.findAll({}).then(function(e){
		response.json(e);
	});
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
