import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from './../actions/index'; 


 class TaskForm extends Component {
    closeForm =()=>{
        this.props.closeForm(this.state);
    }

    constructor(props){
        super(props);
        this.state={
            name: '',
            status:false
        }
    }

    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.type==='checkbox' ? target.checked : target.value ;
         
        this.setState({
            [name] : value
        });
    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        
        this.onClear();
        this.closeForm();
    }

    onClear=()=>{
        this.setState({
            id:'', 
            name:'',
            status:false
        });
    }

    componentWillMount(){
        if(this.props.edit && this.props.edit.id !== null){
            this.setState({
                id: this.props.edit.id,
                name: this.props.edit.name,
                status :this.props.edit.status
            });

        }else{
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.edit){
            this.setState({
                id: nextProps.edit.id,
                name: nextProps.edit.name,
                status : nextProps.edit.status
            });

        }else  {
            this.onClear();
        }
    }


    render() {
        // var {id} = this.state;
        return ( 
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <p className="text-center">
                    {/* { id ==="" ? 'Add tasks' : ' Update tasks '} */}
                    Add task
                    <span className="glyphicon glyphicon-remove text-right"
                    onClick={this.closeForm}></span>
                    </p> 
                </div> 
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                                <label >Name</label>
                                <input type="text" className="form-control" name="name" 
                                value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label  >Status</label>
                            <select name="status"  className="form-control" value={this.state.status} onChange={this.onChange}  >
                                    <option value={true} >Available</option>
                                    <option value= {false} >Unavailable</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-danger btn-md"> <span className="glyphicon glyphicon-saved"></span>  Submit</button>
                        <button type="button" className="btn btn-success btn-md" onClick={this.onClear}> <span className="glyphicon glyphicon-trash"></span>  Cancel</button>
                    </form>
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
const mapDispatchToProps = (dispatch, props)=>{
    return {
        onSubmit : (task) => {
            dispatch(actions.addTask(task));
        },
        closeForm : () => {
            dispatch(actions.closeForm());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);