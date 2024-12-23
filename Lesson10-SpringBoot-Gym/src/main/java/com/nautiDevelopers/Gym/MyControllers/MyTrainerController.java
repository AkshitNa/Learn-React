package com.nautiDevelopers.Gym.MyControllers;

import com.nautiDevelopers.Gym.Entity.Trainer;
import com.nautiDevelopers.Gym.Service.TrainerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gym")
public class MyTrainerController {

    private TrainerServiceImpl DAO;

    @Autowired
    public MyTrainerController(TrainerServiceImpl x)
    {
        DAO = x;
    }

    @GetMapping("/trainers")
    public List<Trainer> findAll()
    {
        return  DAO.findAll();
    }

    @GetMapping("/trainers/{id}")
    public Trainer getTrainerData(@PathVariable int id)
    {
        Trainer thetrainer = DAO.findById(id);

        if(thetrainer==null)
        {throw new RuntimeException("Id not found" + id);}

        else {
            return thetrainer;
        }
    }

    @PostMapping("/trainers")
    public Trainer addTrainer(@RequestBody Trainer thetrainer)
    {
        thetrainer.setTrainerId(0); //Setting ID => 0 so if someone passed ID then it makes it zero as the function is to add not update.
        Trainer DBTrainer = DAO.save(thetrainer);
        return DBTrainer;

        //NOTE: USE Postman and change the method to POST.
    }

    @PutMapping("/trainers")
    public Trainer updateTrainer(@RequestBody Trainer thetrainer)
    {
        Trainer DBTrainer = DAO.save(thetrainer);
        return DBTrainer;

        //NOTE: USE Postman and change the method to PUT.
    }

    @DeleteMapping("/trainers/{id}")
    public String deleteTrainerData(@PathVariable int id)
    {
        Trainer thetrainer = DAO.findById(id);

        if(thetrainer==null)
        {throw new RuntimeException("Id not found" + id);}

        else {
            DAO.deleteById(id);
        }

        return "The id" + id + " is successfully DELETED.";
    }

    //NOTE: USE Postman and change the method to DELETE.

}



