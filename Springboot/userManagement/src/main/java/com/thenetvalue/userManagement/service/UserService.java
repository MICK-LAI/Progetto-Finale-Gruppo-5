package com.thenetvalue.userManagement.service;

import com.thenetvalue.userManagement.dao.UserRepositoryDAO;
import com.thenetvalue.userManagement.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    UserRepositoryDAO userRepositoryDAO;

   @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userRepositoryDAO) {
        this.userRepositoryDAO = userRepositoryDAO;
    }

    public  User addUser(User user){
       User result = userRepositoryDAO.save(user);
       if(result != null){
           return result;
        }else{
           return null;
        }
    }

    public User getUserById(int id){
        Optional result = userRepositoryDAO.findById(id);
        return (User) result.get();
    }


    public Iterable<User> getAllUsers() {
       return userRepositoryDAO.findAll();
    }


    public String updateUserById(int id, User user) {
       if(user.getId() == 0){
           user.setId(id);
       }
       User result = userRepositoryDAO.save(user);
        if(result != null){
            return "Utente aggiornato correttamente";
        }else{
            return "Utente non aggiornato, errore";
        }
    }

    public String deleteUserById(int id) {
        User result = userRepositoryDAO.findById(id).orElse(null);
        if(result == null){
            return "Utente non elimato, errore";

        }else{
            userRepositoryDAO.deleteById(id);
            return "Utente elimanto correttamente";
        }
    }

    public User getUserByUsernameAndPassword(String username, String password) {
        User user = userRepositoryDAO.findUserByUsernameAndPassword(username, password);
        if(user != null){
            return user;
        }else{
            return null;
        }
    }
}
