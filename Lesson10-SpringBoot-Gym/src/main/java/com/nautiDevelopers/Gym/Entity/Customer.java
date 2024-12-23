//Dependent Table

package com.nautiDevelopers.Gym.Entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

        @Data
        @Entity //Declaring it is an Entity Table.
        public class Customer {

        // Define Field
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int customerId;

            private String firstName;
            private String lastName;
            private String email;
            private String contactNo;
            private String gender;
            private int height;
            private int weight;
            private String remarks;
            private String category;

            // Relationship field

            @ManyToOne
            @JoinColumn(name = "trainer_id") //Make "trainer_id" an F.K references Trainer Table.
            @JsonIgnore // Ignore the trainer field when serializing Customer to JSON
            private Trainer trainer;

            // Setter for trainerId
            public void settingTrainerId(int trainerId)

            {
                this.trainer = new Trainer();
                this.trainer.setTrainerId(trainerId);
            }
}


