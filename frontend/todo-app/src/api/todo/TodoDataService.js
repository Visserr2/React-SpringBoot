import Axios from "axios";

class TodoDataService { 

    retrieveAllTodos(name){
        return Axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodo(name, id){
        return Axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    createTodo(name, todo){
        return Axios.post(`http://localhost:8080/users/${name}/todos`, todo);
    }

    async updateToDo(name, id, todo){
        return await Axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }

    deleteTodo(name, id){
        return Axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
}

export default new TodoDataService();