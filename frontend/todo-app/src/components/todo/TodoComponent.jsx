import React, {Component} from 'react';
import moment from 'moment';
import TodoDataService from '../../api/todo/TodoDataService'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class TodoComponent extends Component {

constructor(props){
    super(props);

    this.state = {
        id : this.props.match.params.id,
        todo: {
            description: "",
            username: sessionStorage.getItem('authenticatedUser'),
            targetDate: moment(new Date()).format("YYYY-MM-DD"),
            done: false
        }
    }

    this.fetchToDo = this.fetchToDo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
}

    render() {

        let { todo = {} } = this.state;
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={todo}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                        validate={this.validate}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="done" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="text" name="targetDate"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Done</label>
                                        <Field className="form-control" type="text" name="done"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form> 
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

    componentDidMount() {
        if(this.state.id === "-1"){
            return
        }
        this.fetchToDo();
    }

    fetchToDo(){
        TodoDataService.retrieveTodo(sessionStorage.getItem('authenticatedUser'), this.state.id)
        .then( 
            response => {
                this.setState({
                    todo: response.data
                })
            }
        )
    }

    validate(values){
        let errors = {}

        if(!values.description){
            errors.description = "Enter a description";
        } else if(values.description.length < 5){
            errors.description = "Enter at least 5 characters in the description."
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = "Enter a valid target date."
        }
        if(values.done.toString() === "false" || values.done.toString() === "true"){
            
        } else {
            errors.done = "Enter true or false."
        }

        return errors;
    }

    onSubmit(values){
        let todo = {
            id: this.state.id,
            username: sessionStorage.getItem('authenticatedUser'),
            description: values.description,
            targetDate: values.targetDate,
            done: values.done
        };
        if(this.state.id === "-1") {
            TodoDataService.createTodo(sessionStorage.getItem('authenticatedUser'), todo)
            .then(
                response => {
                    this.props.history.push("/todo")
                })
        } else {
            TodoDataService.updateToDo(sessionStorage.getItem('authenticatedUser'), this.state.id, todo)
            .then(
                response => {
                    this.props.history.push("/todo")
                })
        }
    }
}

export default TodoComponent