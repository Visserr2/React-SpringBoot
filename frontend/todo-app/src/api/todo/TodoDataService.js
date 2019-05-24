import Axios from "axios";
import {API_URL} from '../../Constants'

class TodoDataService { 

    retrieveAllTodos(name){
        return Axios.get(`${API_URL}/users/${name}/todos`);
    }

    retrieveTodo(name, id){
        return Axios.get(`${API_URL}/users/${name}/todos/${id}`);
    }

    createTodo(name, todo){
        return Axios.post(`${API_URL}/users/${name}/todos`, todo);
    }

    async updateToDo(name, id, todo){
        return await Axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
    }

    deleteTodo(name, id){
        return Axios.delete(`${API_URL}/users/${name}/todos/${id}`);
    }
}

export default new TodoDataService();