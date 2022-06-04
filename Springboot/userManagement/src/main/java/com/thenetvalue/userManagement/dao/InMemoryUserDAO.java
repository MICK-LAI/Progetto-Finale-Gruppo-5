package com.thenetvalue.userManagement.dao;

import com.thenetvalue.userManagement.model.User;
import com.thenetvalue.userManagement.repository.InMemoryDatabase;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("firstUserDAO")
public class InMemoryUserDAO implements UserDAO{

    @Override
    public int addUser(User user) {
        return InMemoryDatabase.addUser(user);
    }

    @Override
    public User getUserById(int id) {
        return InMemoryDatabase.getUserById(id);
    }

    @Override
    public List<User> getAllUsers() {
        return InMemoryDatabase.getAllUsers();
    }

    @Override
    public int updateUserById(int id, User user) {
        return InMemoryDatabase.updateUserById(id, user);
    }

    @Override
    public int deleteUserById(int id) {
        return  InMemoryDatabase.delateUserById(id);
    }
}
