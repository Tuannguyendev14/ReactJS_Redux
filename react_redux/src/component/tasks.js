import React, { Component } from 'react';
 
import TaskForm from './taskform';
import Control from './control'; 
import TaskList from './tasklist';
// import _ from 'lodash';
 

import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskManagement extends Component {
     
    onToogleForm=() =>{
        var {edit} = this.props;
        if(edit && edit.id !== ''){
            this.props.onOpenForm();
        }else{
            this.props.onToogleForm(this.state);
            
        }
        this.props.onClear({
            id:'',
            name:'',
            status:false
        });
    }
    
    render() {
       
        var {isDisplayform} =   this.props ;
        var elmTaskForm = isDisplayform ? <TaskForm/> : '';
        
        return ( 
            <div className = "container"> 
                <div className="text-center">
                    <h3>Task Management</h3><hr/>
                </div>
                <div className="row">
                    <div className={isDisplayform? "col-xs-12 col-sm-12 col-md-12 col-lg-4" :""}>
                        {elmTaskForm}
                    </div>
                    <div className={isDisplayform? "col-xs-12 col-sm-12 col-md-12 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary"
                        onClick={this.onToogleForm}>
                             <span className="glyphicon glyphicon-plus"></span> 
                              Add tasks
                        </button>
                            <Control/>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/*List task and filter data (name and status )*/}
                                <TaskList/>
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
        isDisplayform : state.isDisplayForm,
        edit : state.edit
    };
};  

const mapDispatchToProps = (dispatch,props) => {
    return {
        onToogleForm : ()=>{
            dispatch(actions.toogleForm())
        },
        onClear : (task)=>{
            dispatch(actions.updateTask(task))
        },
        onOpenForm : ()=>{
            dispatch(actions.openForm())
        }
    };
};

export default  connect(mapStateToProps,mapDispatchToProps) (TaskManagement);