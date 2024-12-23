package com.nautiDevelopers.Gym.Service;

import com.nautiDevelopers.Gym.Entity.Customer;
import com.nautiDevelopers.Gym.Repository.CustomerRepo;
import com.nautiDevelopers.Gym.Repository.TrainerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl  implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;
    @Autowired
    TrainerRepo trainerRepo;
    public CustomerServiceImpl(CustomerRepo customerRepo, TrainerRepo trainerRepo) {
        this.customerRepo = customerRepo;
        this.trainerRepo = trainerRepo;
    }

    @Override
    public List<Customer> findAll() {
        return customerRepo.findAll();
    }

    @Override
    public Customer findById(int id) {
        Optional<Customer> result = customerRepo.findById(id); //Optional is a class.

        Customer thecustomer = null;

        if (result.isPresent()) {
            thecustomer = result.get();
        } else {
            throw new RuntimeException("Could not find the id " + id);
        }

        return thecustomer;
    }

    // @Transactional JPARepository provides it automatically.
    @Override
    public Customer save(Customer thecustomer) {
        return customerRepo.save(thecustomer);
    }

    // @Transactional JPARepository provides it automatically.
    @Override
    public void deleteById(int id) {
        customerRepo.deleteById(id);
    }
}
