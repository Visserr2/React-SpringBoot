package nl.thuis.webservices.todorestapi.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;

	public JwtTokenRequest() {
		super();
	}
	
	/*
	 * { "token":
	 * "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU1OTMwOTU3MiwiaWF0IjoxNTU4NzA0NzcyfQ.Awk2Na2BpLZbJmxxEX8EJiUXQR3Zcoh5zaMF4x7CH-C0AIdmWHeM3JTVL4T9X1kw7qPdTVjlQWVYWRfcdxpalQ"
	 * }
	 */

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
