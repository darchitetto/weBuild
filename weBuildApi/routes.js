import express from 'express';
import builderController from './controllers/builderController';
import jobController from './controllers/jobController';
import contactController from './controllers/contactController';
import fileStreamController from './controllers/fileStreamController';
import communityController from './controllers/communityController';

let router = express.Router();

router.route('/builders').get(builderController.getBuilders);
router.route('/builders').post(builderController.saveBuilders);
router.route('/builder').get(builderController.getBuilder);

router.route('/jobs').get(jobController.getJobs);
router.route('/jobs').post(jobController.saveJobs);
router.route('/job').get(jobController.getJob);

router.route('/contacts').get(contactController.getContacts);
router.route('/contacts/:contactType').get(contactController.getContacts);

router.route('/contact').post(contactController.saveContact);
router.route('/contact').get(contactController.getContact);

router.route('/fileStream').post(fileStreamController.writeStream);
router.route('/fileStream').get(fileStreamController.getStream);

router.route('/communities').get(communityController.getCommunities);
router.route('/community').post(communityController.saveCommunity);
router.route('/community').get(communityController.getCommunity);

module.exports = router;