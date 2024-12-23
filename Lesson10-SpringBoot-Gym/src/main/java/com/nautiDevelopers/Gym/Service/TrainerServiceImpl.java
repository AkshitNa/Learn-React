package com.nautiDevelopers.Gym.Service;

import com.nautiDevelopers.Gym.Entity.Trainer;
import com.nautiDevelopers.Gym.Repository.TrainerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainerServiceImpl implements TrainerService {

    TrainerRepo DAO;

    @Autowired
    public TrainerServiceImpl(TrainerRepo x) {
        DAO = x;
    }

    @Override
    public List<Trainer> findAll() {
        return DAO.findAll();
    }

    @Override
    public Trainer findById(int id) {
        Optional<Trainer> result = DAO.findById(id); //Optional is a class.

        Trainer thetrainer = null;

        if (result.isPresent()) {
            thetrainer = result.get();
        } else {
            throw new RuntimeException("Could not find the id " + id);
        }

        return thetrainer;
    }

    // @Transactional JPARepository provides it automatically.
    @Override
    public Trainer save(Trainer thetrainer) {
        return DAO.save(thetrainer);
    }

    // @Transactional JPARepository provides it automatically.
    @Override
    public void deleteById(int id) {
        DAO.deleteById(id);

    }
}
