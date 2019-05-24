import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService'
import moment from 'moment';


// Generates the List todo page
class ListTodosComponent extends Component {
    
    // Executed when component get viewed for first time
    constructor(props){
        console.log("1 - Calling constructor");
        super(props);
        if(typeof this.props.location.state !== 'undefined'){
            this.state = {
                todos: this.props.location.state.todos,
                message: null,
                messageFail: null
            }
        } else {
            this.state = {
                todos: [],
                message: null,
                messageFail: null
            }
        }
        this.refreshToDoList = this.refreshToDoList.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    }


    /* this method is used when to update the component. Normally this is managed by React but you can create own rules to improve performance
    * It is called before render-method
    shouldComponentUpdate(nextProps, nextState){
    }
    */
    
    // Renders component after constructor is finished
    render() {
        console.log("2 - Calling render component");
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">
                    {this.state.message}
                </div>}
                {this.state.messageFail && <div className="alert alert-danger">
                    {this.state.messageFail}
                </div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Done</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo => 
                                        <tr key={todo.id}>                          
                                            <td>{todo.description}</td>
                                            <td>{moment(todo.targetDate).format("DD-MM-YYYY")}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add Todo</button>
                    </div>
                </div>
            </div>
        )
    }

    /*
    * Do not call API in the constructor because the page will wait if response is fetched from server. If you do it via componentDidMount, it will load the page and refreshes when de callback is received
    */
   componentDidMount() {
    console.log("3 - Calling mount component");
        this.refreshToDoList();
    }

    // Called when changing to other component
    componentWillUnmount(){
        console.log("4 - Calling unmount component");
    }

    refreshToDoList(){
        TodoDataService.retrieveAllTodos(sessionStorage.getItem('authenticatedUser'))
        .then(
            response => {
                this.setState({
                    todos: response.data,
                    messageFail: null
                })
            }
        )
        .catch(
            error =>{
                this.setState({
                    messageFail: 'Could not fetch the todo list.'
                })
            }
        )
    }

    deleteTodoClicked(id){
        let username = sessionStorage.getItem('authenticatedUser');
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({
                        message: `Delete of todo ${id} successful!`
                    })
                    this.refreshToDoList();
                })
    }

    addTodoClicked(){
        this.props.history.push(`/todo/-1`);
    }

    updateTodoClicked(id){
        this.props.history.push(`/todo/${id}`);
    }
}

export default ListTodosComponent