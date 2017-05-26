'use strict'
const api = require('express').Router()
const db = require('../db')
const models = require('../db/models');
const Student = models.Student;
const Campus = models.Campus;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//GET ALL STUDENTS
api.get('/students', function(req, res, next){
  Student.findAll({
    where: req.query
  })
  .then(studentsFound => res.json(studentsFound))
  .catch(next);
})

//GET A STUDENT BY ID
api.get('/students/:id', function(req, res, next){
  var studentId = req.params.id
  if(!parseInt(studentId)){
    res.sendStatus(500)
  } else {
  Student.findOne({
    where: {
      id: studentId
    }
  })
  .then(function(studentFound){
    if(!studentFound){
      res.status(404).send('Not Found')
    } else {
      res.status(200).send(studentFound);
    }
  })
  .catch(next)
  }
})

//POST A NEW Student
api.post('/students', function(req, res, next){
  console.log(req.body)
  Student.create(req.body)
  .then(studentCreated => res.status(201).json(studentCreated))
  .catch(next);
});

//PUT UPDATED INFO FOR A Student
api.put('/students/:id', function(req, res, next){
  var studentId = req.params.id;
  Student.findById(studentId)
  .then(studentFound => {
    return studentFound.update(req.body)
  .then(updatedStudent => res.status(201).json(updatedStudent))
  })
  .catch(next);
})

//DELETE A STUDENT
api.delete('/student/:id', function(req, res, next){
  var studentId = req.params.id
  if(!parseInt(studentId)){
    res.sendStatus(500)
  } else {
    Student.destroy({
      where: {
        id: studentId
      }
    })
    .then(studentFound => {
      if(!studentFound){
        res.status(404).send('Not Found')
      } else {
        res.status(204).send('Deleted');
      }
    })
    .catch(next)
  }
})

//GET ALL CAMPUSES
api.get('/campuses', function(req, res, next){
  Campus.findAll({
    where: req.query
  })
  .then(campusesFound => res.json(campusesFound))
  .catch(next);
})

//GET A CAMPUS BY ID
api.get('/campuses/:id', function(req, res, next){
  var campusId = req.params.id
  if(!parseInt(campusId)){
    res.sendStatus(500)
  } else {
  Campus.findOne({
    where: {
      id: campusId
    }
  })
  .then(function(campusFound){
    if(!campusFound){
      res.status(404).send('Not Found')
    } else {
      res.status(200).send(campusFound);
    }
  })
  .catch(next)
  }
})

//POST A NEW CAMPUS
api.post('/campuses', function(req, res, next){
  Campus.create(req.body)
  .then(campusCreated => res.status(201).json(campusCreated))
  .catch(next);
});

//PUT UPDATED INFO FOR A CAMPUS
api.put('/campuses/:id', function(req, res, next){
  var campusId = req.params.id;
  Campus.findById(campusId)
  .then(campusFound => {
    return campusFound.update(req.body)
  .then(updatedCampus => res.status(201).json(updatedCampus))
  })
  .catch(next);
})

//DELETE A CAMPUS
api.delete('/campuses/:id', function(req, res, next){
  var campusId = req.params.id
  if(!parseInt(campusId)){
    res.sendStatus(500)
  } else {
    Campus.destroy({
      where: {
        id: campusId
      }
    })
    .then(campusFound => {
      if(!campusFound){
        res.status(404).send('Not Found')
      } else {
        res.status(204).send('Deleted');
      }
    })
    .catch(next)
  }
})


module.exports = api
