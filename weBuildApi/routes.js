import express from 'express';
import builderController from './controllers/builderController';
import jobController from './controllers/jobController';
import contactController from './controllers/contactController';


let router = express.Router();

router.route('/builders').get(builderController.getBuilders);
router.route('/builders').post(builderController.saveBuilders);
router.route('/builder').get(builderController.getBuilder);

router.route('/jobs').get(jobController.getJobs);
router.route('/jobs').post(jobController.saveJobs);
router.route('/job').get(jobController.getJob);

router.route('/contacts').get(contactController.getContacts);
router.route('/contact').post(contactController.saveContact);
router.route('/job').get(contactController.getContact);

module.exports = router;