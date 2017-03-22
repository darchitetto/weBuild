import express from 'express';
import builderController from './controllers/builderController';

let router = express.Router();

router.route('/builders').get(builderController.getBuilders);
router.route('/builders').post(builderController.saveBuilders);
router.route('/builder').get(builderController.getBuilder);

module.exports = router;