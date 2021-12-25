const express = require('express');

const contestRouter = require('./routers/contestRouter');
const userRouter = require('./routers/userRouter');
const chatRouter = require('./routers/chatRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/contests', contestRouter);
router.use('/chats', chatRouter);

module.exports = router;
