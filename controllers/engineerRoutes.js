const express= require("express")
const router= express.Router()
const engineerViews=require("./engineerViews")
const engineerData=require("./engineerData")
const engineerApi=require("./engineerAPI")

//index
router.get("/",engineerData.index,engineerViews.index)
//new
router.get("/new",engineerViews.newView)
//destroy
router.delete("/:id",engineerData.destroy,engineerViews.redirectHome)
//update
router.put("/:id",engineerData.update,engineerViews.redirectShow)
//create
router.post("/",engineerData.create,engineerViews.redirectHome)
//edit
router.get("/:id/edit",engineerData.show,engineerViews.edit)
//show
router.get("/:id",engineerData.show, engineerViews.show)

// //api index
// router.get("/api",engineerApi.index)
// //api destroy
// router.delete("/api/:id",engineerApi.destroy)
// //api update
// router.put("/api/:id",engineerApi.update)
// //api create
// router.post("/api",engineerApi.create)
// //api show
// router.get("/engineers/:id",engineerApi.show)



module.exports=router