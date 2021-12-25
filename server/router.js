const express = require('express');
const basicMiddlewares = require('./middlewares/basicMiddlewares');

const contestController = require('./controllers/contestController');
const checkToken = require('./middlewares/checkToken');

const upload = require('./utils/fileUpload');
const contestRouter = require('./routers/contestRouter');
const userRouter = require('./routers/userRouter');
const chatRouter = require('./routers/chatRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/contests', contestRouter);
router.use('/chats', chatRouter);

router.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile
);

router.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer
);

router.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus
);

module.exports = router;
