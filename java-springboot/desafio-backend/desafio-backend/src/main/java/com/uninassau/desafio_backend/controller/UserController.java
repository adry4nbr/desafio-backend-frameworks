package com.uninassau.desafiobackend.controller;

import com.uninassau.desafiobackend.model.User; 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @GetMapping
    public List<User> listarTodos() {
        return Arrays.asList(
            new User(1L, "Adryan", "adryan@email.com"),
            new User(2L, "Marcelo", "marcelo@email.com")
        );
    }
}