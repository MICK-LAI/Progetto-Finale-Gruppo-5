package com.thenetvalue.userManagement.dao;

import com.thenetvalue.userManagement.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {

    User findUserByUsernameAndPassword(String username, String password);
}
