import React, { Component } from 'react';
import TaskItem from './taskitem';
import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {

    // Filter data from form
    constructor(props){
        super(props);
        this.state={
            filterName : '',
            filterStatus : -1 // all: -1 , active: 1, deactive: 0
        }
    }

    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter ={
            name : name === 'filterName' ? value : this.state.filterName,
            status : name ==='filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilter(filter);
        this.setState({
            [name]:value
        });
    }

    render() {
        
        var {tasks,filter,keyword,filterName,sort} = this.props ;
         
        if(filter){
            if(filter.name){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name)!== -1;
                });
            }
            tasks = tasks.filter((task) => {
                if(filter.status=== -1){
                    return task;
                }else{
                    return task.status === (filter.status=== 1 ? true :false);
                }
            });
        }

        if(keyword){
            tasks = _.filter(tasks, (task) =>{
                return task.name.toLowerCase().indexOf(keyword)!== -1; 
            });
        }

        if(sort.by==="name"){
            tasks.sort((a,b)=>{
                if(a.name > b.name) return sort.value;
                if(a.name < b.name ) return -sort.value;
                else return 0;
            });
        }else{
            tasks.sort((a,b)=>{
                if(a.status > b.status) return -sort.value;
                if(a.status < b.status ) return sort.value;
                else return 0;
            });
        }

        var elmTasks = tasks.map((task,index)=> {
            return   <TaskItem key={task.id}
                             index={index}
                             task ={task}
                             onUpdate={this.props.onUpdate}
                    />
        });

        return ( 
            <div>
                <table className="table table-bordered table-hover mt-15">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange}  />
                            </td>
                            <td>
                                <select name="filterStatus" id="input" className="form-control" value="{filterStatus}" onChange={this.onChange}>
                                    <option value={-1}>All</option>
                                    <option value={0}>Unavailable</option>
                                    <option value={1}>Available</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elmTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks,
        filter : state.filter,
        keyword:state.search,
        sort:state.sort
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onFilter : (filter)=>{
            dispatch(actions.filterTask(filter))
        } 
    };
} ;

export default connect (mapStateToProps,mapDispatchToProps)(TaskList);