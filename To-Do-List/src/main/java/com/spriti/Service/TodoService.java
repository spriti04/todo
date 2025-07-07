package com.spriti.Service;

import com.spriti.Model.Todo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TodoService {

    public Todo createTodo(Todo todo);

    public Todo updateTodo(int id, Todo updatedTodo);

    public List<Todo> getAllTodos();

    public String deleteTodo(int id);
}
