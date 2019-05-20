import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService'

// Generates the List todo page
class ListTodosComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            todo: [
            ]
        }
    }

    /*
    * Do not call API in the constructor because the page will wait if response is fetched from server. If you do it via componentDidMount, it will load the page and refreshes when de callback is received
    */
    componentDidMount() {
        TodoDataService.retrieveAllTodos(sessionStorage.getItem('authenticatedUser'))
            .then(
                response => {
                    this.setState({
                        todo: response.data
                    })
                }
            )
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Done</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todo.map (
                                    todo => 
                                        <tr key={todo.id}>                          
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent