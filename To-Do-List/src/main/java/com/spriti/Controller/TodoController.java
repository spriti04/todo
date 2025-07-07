package com.spriti.Controller;

import com.spriti.Model.Todo;
import com.spriti.Repository.TodoRepository;
import com.spriti.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
        Todo todo1 = service.createTodo(todo);
        return new ResponseEntity<>(todo1, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable int id, @RequestBody Todo updatedTodo) {
        Todo todo = service.updateTodo(id, updatedTodo);
        return new ResponseEntity<>(todo, HttpStatus.ACCEPTED);
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        List<Todo> lists = service.getAllTodos();
        return new ResponseEntity<>(lists, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable int id) {
        String result = service.deleteTodo(id);

        return ResponseEntity.ok(result);
    }
}
