const router = require("express").Router();
const usercontroller = require("../controllers/usercontroller");


router.get("/", usercontroller.viewmatakuliah); 
router.post("/", usercontroller.addmatakuliah); 
router.put("/", usercontroller.editmatakuliah); 
router.delete("/:id", usercontroller.deletematakuliah); 



module.exports = router;