package com.thenetvalue.userManagement.repository;

import com.thenetvalue.userManagement.model.User;
import org.springframework.stereotype.Repository;


import java.util.*;

public class InMemoryDatabase {

    static Map<Integer, User> users =  new HashMap<>();
    static int lastIndex = 0;

    public static int addUser(User user){
        user.setId(++lastIndex);
        users.put(user.getId(), user);
        return  1;
    }

    public static User getUserById(int id){
        return users.get(id);
    }

    public static List<User> getAllUsers() {
        Collection<User> allUsers = users.values();
        return new ArrayList<>(allUsers);
    }

    public static int updateUserById(int id, User user) {
        user.setId(id);
        users.replace(id, user);
        return  1;
    }

    public static int delateUserById(int id) {
        users.remove(id);
        return 1;
    }
}
