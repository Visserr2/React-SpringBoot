package nl.thuis.webservices.todorestapi.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	
	private static List<ToDo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new ToDo(++idCounter, "ronald", "Learn React", new Date(), false));
		todos.add(new ToDo(++idCounter, "ronald", "Learn CSS", new Date(), false));
		todos.add(new ToDo(++idCounter, "ronald", "Learn Spring Boot", new Date(), false));
		todos.add(new ToDo(++idCounter, "ronald", "Learn Mule", new Date(), false));

	}
	
	public ToDo findById(long id) {
		for(ToDo todo: todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

	public List<ToDo> findAll() {
		return todos;
	}
	
	public ToDo save(ToDo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}	
		return todo;
	}
	
	public ToDo deleteById(long id) {
		ToDo todo = findById(id);
		if(todo == null) {
			return null;
		}
		
		if(todos.remove(todo)) {
			return todo;
		}
		
		return null;
	}
}
