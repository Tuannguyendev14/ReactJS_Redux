import React, { Component } from 'react';
 
import TaskForm from './taskform';
import Control from './control'; 
import TaskList from './tasklist';
import _ from 'lodash';
 

import {connect} from 'react-redux';
import * as actions from './actions/index';

 class TaskManagement extends Component {
     

    constructor(props){
        super(props);
        this.state={
            //tasks:[] , id, name, status
            //isDisplayform:false,
            taskEditting: null,
            filter : {
                name:'',
                status:-1
            },
            keyword:'',
            sortBy:'name',
            sortValue:1
        }
    }
    // onGenerateData =()=>{
    //     var tasks = [
    //         {
    //             id: this.generateID(),
    //             name:'Read documents about React Life Circle',
    //             status: false
    //         },
    //         {
    //             id: this.generateID(),
    //             name:'Write test case',
    //             status: true
    //         }
    //     ];
    //     this.setState({
    //         tasks:tasks
    //     });

    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // } 

    // componentWillMount(){
    //     if(localStorage && localStorage.getItem ('tasks')){
    //         var tasks = JSON.parse(localStorage.getItem('tasks'));
    //         this.setState({
    //             tasks: tasks
    //         });
    //     }
    // }

    // Dong mo form , xet gia tri nguoc lai
    onToggleForm=() =>{
        // if(this.state.isDisplayform && this.state.taskEditting!== null){
        //     this.setState({
        //         isDisplayform: true,
        //         taskEditting : null
        //     });
        // }else{
        //     this.setState({
        //         isDisplayform: !this.state.isDisplayform,
        //         taskEditting : null
        //     });
        // }
        this.props.onToggleForm(this.state);
    }

    // Dong form
    // onCloseForm=()=>{
    //     this.setState({
    //         isDisplayform: false
    //     });
    // }

    // Open form
    // onShowForm=()=>{
    //     this.setState({
    //         isDisplayform: true
    //     });
    // }

    // onSubmit=(data)=>{
    //     var {tasks} = this.state.tasks;
    //     data.status= data.status ===  'true' ? true:false;

    //     if(data.id ===''){
    //         data.id =  this.generateID();
    //         tasks.push(data);            
    //     }else{            
    //         //var index=this.findIndex(data.id);
    //         var index = _.findIndex(tasks, (task)=> {
    //             return task.id === data.id;
    //         });
    //         tasks[index]= data;
    //     }

    //     this.setState({
    //         tasks:tasks,
            
    //     });  
    //     localStorage.setItem('tasks', JSON.stringify(tasks));       
    // } 

    
 
    onUpdateStatus=(id)=>{
        var {tasks} = this.state;

        //var index= this.findIndex(id);
       
        var index = _.findIndex(tasks,(task) => {
             return task.id === id ; 
            });
        if(index!==-1){
            tasks[index].status=!tasks[index].status;
            this.setState({
                tasks:tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // findIndex=(id)=>{
    //     var {tasks} = this.state;
    //     var result = -1;
    //     tasks.forEach((task,index)=>{
    //         if(task.id===id){
    //             result = index;
    //         }
    //     });
    //     return result;
    // }

    // onDelete=(id)=>{
    //     var {tasks} = this.state;
    //     //var index= this.findIndex(id);
    //     var index = _.findIndex(tasks, (task)=> {
    //          return task.id === id;
    //     });

    //     if(index!==-1){
    //         tasks.splice(index,1);
    //         this.setState({
    //             tasks:tasks
    //         });
    //         localStorage.setItem('tasks', JSON.stringify(tasks));
    //     }
    //     this.onCloseForm();
    // }

    // onUpdate=(id)=>{
    //     var {tasks} = this.state;
    //     //var index= this.findIndex(id);
    //     var index = _.findIndex(tasks, (task)=> {
    //         return task.id === id;
    //     });
    //     var taskEditting= tasks[index];
         
    //     this.setState({
    //         taskEditting: taskEditting
    //     });
    //     this.onShowForm();
                
            
    // }

    // onFilter=(filterName, filterStatus)=>{
    //     filterStatus=parseInt(filterStatus,10);
    //     this.setState({
    //         filter:{
    //             name:filterName.toLowerCase(),
    //             status:filterStatus
    //         }
    //     })
    // }

    // onSearch=(keyword)=>{
    //    this.setState({
    //        keyword: keyword
    //    });
    // }

    // onSort=(sortBy, sortValue)=>{
    //     console.log(sortBy, sortValue);
    //     this.setState({
    //         sortBy: sortBy,
    //         sortValue:sortValue
    //     });
    // }

    render() {
        var {   //isDisplayform, 
            taskEditting, 
            filter,
            //keyword, 
            sortBy, 
            sortValue } = this.state;  
        // if(filter){
        //     if(filter.name){
        //         tasks = tasks.filter((task) => {
        //             return task.name.toLowerCase().indexOf(filter.name)!== -1;
        //         });
        //     }
        //     tasks = tasks.filter((task) => {
        //         if(filter.status=== -1){
        //            return task;
        //         }else{
        //             return task.status === (filter.status=== 1 ? true :false);
        //         }
        //     });
        // }

        // if(keyword){
             

        //     tasks = _.filter(tasks, (task) =>{
        //         return task.name.toLowerCase().indexOf(keyword)!== -1; 
        //     });
        // }

        // if(sortBy==="name"){
        //     tasks.sort((a,b)=>{
        //         if(a.name > b.name) return sortValue;
        //         if(a.name < b.name ) return -sortValue;
        //         else return 0;
        //     });
        // }else{
        //     tasks.sort((a,b)=>{
        //         if(a.status > b.status) return -sortValue;
        //         if(a.status < b.status ) return sortValue;
        //         else return 0;
        //     });
        // }

        var elmTaskForm = isDisplayform ? <TaskForm onSubmit={this.onSubmit} 
                                                    onCloseForm={this.onCloseForm}
                                                    task={taskEditting}
                                          /> : '';

        var {isDisplayform} =   this.props ;

        return ( 
            <div className = "container"> 
                <div className="text-center">
                    <h3>Task Management</h3><hr/>
                </div>
                <div className="row">
                    <div className={isDisplayform? "col-xs-12 col-sm-12 col-md-12 col-lg-4" :""}>
                        {/*Form*/}
                       {elmTaskForm}
                    </div>
                    <div className={isDisplayform? "col-xs-12 col-sm-12 col-md-12 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary"
                        onClick={this.onToggleForm}>
                             <span className="glyphicon glyphicon-plus"></span> 
                              Add tasks
                        </button>

                        <button type="button" className="btn btn-warning" 
                        onClick={this.onGenerateData}> <span className="glyphicon glyphicon-plus"></span> 
                        Generate
                            </button> 
                         
                        {/*Search and Sort*/}
                        <Control onSearch={this.onSearch}  onSort = {this.onSort}  sortBy={sortBy} sortValue={sortValue} />

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/*List task and filter data (name and status )*/}
                                <TaskList  
                                     
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
                                />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                    
                 
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        isDisplayform : state.isDisplayform;
    };
};

const mapDispatchToProps = (state) => {
    return {
        onToggleForm : ()=>{
            dispatch(actions.toggleForm());
        }
    };
} ;

export default  connect(mapStateToProps,mapDispatchToProps) (TaskManagement);