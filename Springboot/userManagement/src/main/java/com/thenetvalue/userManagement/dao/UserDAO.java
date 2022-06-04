package com.thenetvalue.userManagement.dao;

import com.thenetvalue.userManagement.model.User;

import java.util.List;

public interface UserDAO {

    public int addUser(User user);
    public User getUserById(int id);
    public List<User> getAllUsers();
    public int  updateUserById(int id, User user);
    public int deleteUserById(int id);
}
