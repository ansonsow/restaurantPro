const express = require('express');
const router = express.Router();

// import the controller, make sure it is exported
const userTaskCtrl = require("../controllers/userTaskController");

router.get("/usersTasks", userTaskCtrl.getUserTask);
router.get("/usersTasks/user/:uid", userTaskCtrl.getUserTask);
router.get("/usersTasks/task/:tid", userTaskCtrl.getUserTask);

router.get("/usersTasks/:uid/:tid", userTaskCtrl.getUserTask);
router.post("/usersTasks", userTaskCtrl.saveUserTask);
router.put("/usersTasks/:uid/:tid", userTaskCtrl.updateUserTask);

router.get("/usersTasksToday", userTaskCtrl.getUserTaskToday);
router.get("/usersTasksToday/user/:uid", userTaskCtrl.getUserTaskToday);
router.get("/usersTasksToday/task/:tid", userTaskCtrl.getUserTaskToday);
// deleteAllUserTask
router.delete("/usersTasksDeleteAll", userTaskCtrl.deleteAllUserTask)

module.exports = router;
