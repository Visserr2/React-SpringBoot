package nl.thuis.webservices.todorestapi;

public class HelloWorld {
	
	private String message;
	
	public HelloWorld(String message) {
		this.message = message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getMessage() {
		return message;
	}

	@Override
	public String toString() {
		return "HelloWorld [message=" + message + "]";
	}
	
}
