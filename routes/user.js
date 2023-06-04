const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorization, verifyToken, verifyAnAdmin} = require("../middleware/verifyToken")


// Update User 
router.put("/:id", verifyAndAuthorization,userController.updateUser);

// Delete User
router.delete("/:id", verifyAndAuthorization,userController.deleteUser);

//Get User
router.get("/:id", verifyAndAuthorization,userController.getUser);

//Get All User
router.get("/", verifyAnAdmin,userController.getAllUser);



//last line
module.exports = router;