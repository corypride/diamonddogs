package org.launchcode.happyroots.Models.Data;


import org.launchcode.happyroots.Models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
}
