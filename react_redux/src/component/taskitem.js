import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    onUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete=()=>{
        this.props.onDelete(this.props.task.id);
        this.closeForm();
    }

    onUpdate=()=>{
        this.props.onOpenForm();
        this.props.onUpdate(this.props.task);

    }

    closeForm =()=>{
        this.props.closeForm(this.state);
    }

     

    render() {
        var {task,index} = this.props;
        return ( 
             
                <tr>
                    <td>{index +1}</td>
                    <td>{task.name} </td>
                    <td className="text-center" > 
                        <span className={task.status===true ? 'label label-success' : 'label label-danger   ' } 
                        onClick={this.onUpdateStatus}
                        >{task.status===true ? 'Available' : 'Unavailable'}</span> 
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning  btn-xs" onClick={this.onUpdate}>  Update</button> &nbsp;
                        <button type="button" className="btn btn-danger btn-xs" onClick={this.onDelete}>    Delete </button>
                        
                    </td>
                </tr>
        );
    }
}


const mapStateToProps = (state) => {
    return {
         
    };
};  

const mapDispatchToProps = (dispatch,props) => {
    return {
        onUpdateStatus : (id)=>{
            dispatch(actions.updateStatus(id))
        },
        onDelete : (id)=>{
            dispatch(actions.deleteTask(id))
        },
        closeForm : () => {
            dispatch(actions.closeForm())
        },
        onOpenForm : ()=>{
            dispatch(actions.openForm())
        },
        onUpdate : (task)=>{
            dispatch(actions.updateTask(task))
        }
    };
} ;

export default  connect(mapStateToProps,mapDispatchToProps) (TaskItem);