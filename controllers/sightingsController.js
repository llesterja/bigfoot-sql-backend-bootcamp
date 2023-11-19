const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.model.findByPk(sightingId);
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addNew(req,res){
    const {date,location,notes}=req.body;
    try {
      const newSighting = await this.model.create({
        date:new Date(date),
        location:location,
        notes:notes
      });
      return res.json(newSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  async removeOne(req,res){
    const { sightingId } = req.params;
    try {
      const removeSighting = await this.model.destroy({
        where:{
          id: sightingId
        }
      });
      return res.json(removeSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  
}

module.exports = SightingsController;
