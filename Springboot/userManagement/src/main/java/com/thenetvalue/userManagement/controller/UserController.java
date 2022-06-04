package com.thenetvalue.userManagement.controller;

import com.thenetvalue.userManagement.model.User;
import com.thenetvalue.userManagement.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/{id}")
    public User getUserByID(@PathVariable("id") int id){
        return userService.getUserById(id);
    }

    @GetMapping("/")
    public Iterable<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/username/password/{username}/{password}")
    public User getUserByUsernameAndPassword(@PathVariable("username") String username,@PathVariable("password") String password){
        return userService.getUserByUsernameAndPassword(username, password);
    }

    @PutMapping("/{id}")
    public String updateUserById(@PathVariable("id") int id,@RequestBody User user){
        return  userService.updateUserById(id, user);
    }

    @DeleteMapping("/{id}")
    public String deleteUserById(@PathVariable("id") int id){
        return userService.deleteUserById(id);
    }

}
