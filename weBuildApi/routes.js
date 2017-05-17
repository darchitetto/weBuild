import express from 'express';
import builderController from './controllers/builderController';
import jobController from './controllers/jobController';

let router = express.Router();

router.route('/builders').get(builderController.getBuilders);
router.route('/builders').post(builderController.saveBuilders);
router.route('/builder').get(builderController.getBuilder);

router.route('/jobs').get(jobController.getJobs);
router.route('/jobs').post(jobController.saveJobs);
router.route('/job').get(jobController.getJob);

module.exports = router;