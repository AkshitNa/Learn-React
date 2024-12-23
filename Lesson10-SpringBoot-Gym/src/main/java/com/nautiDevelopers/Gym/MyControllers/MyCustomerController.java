package com.nautiDevelopers.Gym.MyControllers;

import com.nautiDevelopers.Gym.Entity.Customer;
import com.nautiDevelopers.Gym.Service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/gym")
public class MyCustomerController {

    private CustomerServiceImpl DAO;

    @Autowired
    public MyCustomerController(CustomerServiceImpl x)
    {
        DAO= x;
    }

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> findAll() {
        List<Customer> customers = DAO.findAll();
        return ResponseEntity.ok(customers);
    }

    /*
    public List<Customer> findAll()
    {
        return  DAO.findAll();
    }*/

    @GetMapping("/customers/{id}")
    public Customer getCustomerData(@PathVariable int id)
    {
        Customer thecustomer = DAO.findById(id);

        if(thecustomer==null)
        {throw new RuntimeException("Id not found" + id);}

        else {
            return thecustomer;
        }
    }

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer thecustomer)
    {
        thecustomer.setCustomerId(0); //Setting ID => 0 so if someone passed ID then it makes it zero as the function is to add not update.
        Customer DBCustomer = DAO.save(thecustomer);
        return DBCustomer;

        //NOTE: USE Postman and change the method to POST.
    }

    @PutMapping("/customers")
    public Customer updateCustomer(@RequestBody Customer thecustomer)
    {
        Customer DBCustomer = DAO.save(thecustomer);
        return DBCustomer;

        //NOTE: USE Postman and change the method to PUT.
    }

    @DeleteMapping("/customers/{id}")
    public String deleteCustomerData(@PathVariable int id)
    {
        Customer thecustomer = DAO.findById(id);

        if(thecustomer==null)
        {throw new RuntimeException("Id not found" + id);}

        else {
            DAO.deleteById(id);
        }

        return "The Customer id" + id + " is successfully DELETED.";
    }

    //NOTE: USE Postman and change the method to DELETE.

}

// localhost:8080/gym/customers


