package nl.thuis.webservices.todorestapi.jwt.resource;

public class AuthenticationException extends RuntimeException {
	
	private static final long serialVersionUID = -2908119745144162386L;

	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
	
}
