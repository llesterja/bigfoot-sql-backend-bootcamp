const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:sightingId", this.controller.getOne.bind(this.controller));
    router.delete("/:sightingId", this.controller.removeOne.bind(this.controller));
    router.post("/",this.controller.addNew.bind(this.controller));
    return router;
  }
}

module.exports = SightingsRouter;
