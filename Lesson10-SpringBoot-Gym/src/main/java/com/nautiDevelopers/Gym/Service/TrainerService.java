package com.nautiDevelopers.Gym.Service;

import com.nautiDevelopers.Gym.Entity.Trainer;

import java.util.List;

public interface TrainerService {

    List<Trainer> findAll();

    Trainer findById(int id);

    Trainer save(Trainer thetrainer);

    void deleteById(int id);
}
