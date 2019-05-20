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

	public List<ToDo> findAll() {
		return todos;
	}	
}
