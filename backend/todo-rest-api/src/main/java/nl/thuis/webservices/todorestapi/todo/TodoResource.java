package nl.thuis.webservices.todorestapi.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResource {
	
	@Autowired
	private TodoHardCodedService todoService;
	
	@GetMapping(path="/users/{username}/todos")
	public List<ToDo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
	@GetMapping(path="/users/{username}/todos/{id}")
	public ToDo getTodo(@PathVariable String username, @PathVariable long id){
		return todoService.findById(id);
	}
	
	// When deleting return noContent
	@DeleteMapping(path="/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		ToDo todo = todoService.deleteById(id);
		
		if(todo != null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	
	// Post-mapping. When creating return the URI of created resource
	@PostMapping(path="/users/{username}/todos")
	public ResponseEntity<Void> addToDo(@PathVariable String username, @RequestBody ToDo todo){
		ToDo created = todoService.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(created.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	// When updating return updated object
	@PutMapping(path="/users/{username}/todos/{id}")
	public ResponseEntity<ToDo> updateToDo(@PathVariable String username, @RequestBody ToDo todo){
		ToDo updated = todoService.save(todo);
		
		return new ResponseEntity<ToDo>(updated, HttpStatus.OK);
	}
}
