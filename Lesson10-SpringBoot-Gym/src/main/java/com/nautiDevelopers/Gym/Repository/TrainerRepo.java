package com.nautiDevelopers.Gym.Repository;

import com.nautiDevelopers.Gym.Entity.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TrainerRepo extends JpaRepository <Trainer, Integer> {
    Optional<Trainer> findByTrainerId(int trainerId);

    //And thats all............. :)
}
