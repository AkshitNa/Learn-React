package com.nautiDevelopers.Gym.Repository;

import com.nautiDevelopers.Gym.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository <Customer, Integer> {

    //And thats all............. :)
}