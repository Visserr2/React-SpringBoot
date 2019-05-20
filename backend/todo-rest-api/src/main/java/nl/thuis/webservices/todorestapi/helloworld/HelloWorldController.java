package nl.thuis.webservices.todorestapi.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

	@GetMapping(path="/hello-world")
	public String HelloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorld HelloWorldBean() {
		return new HelloWorld("Hello World");
	}
	
	@GetMapping(path="/hello-world/name/{name}")
	public HelloWorld HelloWorldPathVariable(@PathVariable String name) {
		return new HelloWorld(String.format("Hello World, %s", name));
	}
}
