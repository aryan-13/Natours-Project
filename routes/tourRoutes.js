const express = require('express');
const tourController = require('./../controllers/tourController');
// const tourController = require('./../controllers/tourController');

// OR

// const {getAllTours, createTour,.....} = require('./../controllers/tourController'); <------[Destructuring]

const router = express.Router();

// router.param('id', tourController.checkID); // PARAM Function is to define parameter middleware

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTour, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
// post(req -> middleware no.1(checkBody) -> middleware no.2(createTour))

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
