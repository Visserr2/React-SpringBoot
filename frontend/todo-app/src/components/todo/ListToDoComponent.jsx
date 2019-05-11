import React, {Component} from 'react';


// Generates the List todo page
class ListTodosComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            todo: [
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Learn CSS', done: false, targetDate: new Date()},
                {id: 3, description: 'Learn Spring Boot', done: false, targetDate: new Date()},
                {id: 4, description: 'Learn Mule', done: false, targetDate: new Date()}
            ]
        }
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