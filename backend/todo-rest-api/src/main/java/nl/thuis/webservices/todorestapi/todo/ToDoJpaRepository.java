package nl.thuis.webservices.todorestapi.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoJpaRepository extends JpaRepository<ToDo, Long> {

	List<ToDo> findByUsername(String username);
}
