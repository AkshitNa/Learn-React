package com.nautiDevelopers.Gym.Service;

import com.nautiDevelopers.Gym.Entity.Customer;
import java.util.List;

public interface CustomerService
{
    List<Customer> findAll();

    Customer findById(int id);

    Customer save(Customer thecustomer);

    void deleteById(int id);
}
