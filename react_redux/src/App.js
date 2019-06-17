import React,{Component} from 'react';
import './App.css';
import './form.css';
import './taskList.css';
import Form from './component/form';
import Login from './component/login';
import Homepage from './component/homepage';
import Table from './component/table';
import Chitiet from './component/chitiet';
import TaskManagement from './component/tasks';
import {BrowserRouter, Route} from 'react-router-dom';

//import thu vien cua redux 
import {createStore} from 'redux';
import {status,sort } from './traning/actions/index';
import myReducer from './traning/reducers/index';

class App extends Component {
	render() { 
		
	// check redux 

	

	//Dinh nghia store
	const store = createStore(myReducer);


	console.log("Default : " , store.getState());

	// Thuc hien cong viec thay doi status
	// var action = {type: 'TOOGLE_STATUS'};
	store.dispatch(status());	
	console.log("TOOGLE_STATUS : " , store.getState());

	// Thuc hien cong viec sap xep tu z den a
	// var sortAction = {
	// 	type: 'sort',
	// 	sort: {
	// 		by: 'name',
	// 		value : -1 
	// 	}
	// } 
	store.dispatch(sort({
		by: 'name',
 		value : -1
	}));
	console.log("sort : " , store.getState());


		// Route
		return (
			<div> 
			
				<BrowserRouter>
					<Route exact path= '/' component = {Homepage}/>
					<Route exact path= '/form' component = {Form}/>
					<Route exact path= '/login' component = {Login}/>
					<Route exact path= '/table' component = {Table}/>
					<Route exact path='/task' component = {TaskManagement}/>
					<Route exact path="chitiet/:id" component = {Chitiet}/>
					 
				</BrowserRouter>
			</div>
			
		);
	} 
}

export default App;
