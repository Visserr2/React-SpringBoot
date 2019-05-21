import Axios from "axios";

class TodoDataService { 

    retrieveAllTodos(name){
        return Axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodo(name, id){
        return Axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id){
        return Axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
}

export default new TodoDataService();