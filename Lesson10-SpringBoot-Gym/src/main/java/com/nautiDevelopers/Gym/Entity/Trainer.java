//Independent Table

/* Change the Customer type to List<Customer> to reflect the one-to-many relationship.
Ensure customer is renamed to customers for clarity. */

package com.nautiDevelopers.Gym.Entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Data
@Entity // Declaring it is an Entity Table.
public class Trainer {

    // Define Field
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int trainerId;

    private String firstName;
    private String lastName;
    private String email;
    private String contactNo;
    private String category;
    private String gender;
    private double height;
    private double weight;
    private String remarks;

    // Relationship field
    @OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Customer> customers;

}


