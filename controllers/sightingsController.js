const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model,commentModel) {
    super(model);
    this.commentModel = commentModel;
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

  async getAllComments(req, res) {
    try {
      const { sightingId } = req.params;
      const output = await this.commentModel.findAll({
        where:{sighting_id:sightingId}
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addOneComment(req, res) {
    try {
      const { sightingId } = req.params;
      const {content} = req.body;
      const newComment = await this.commentModel.create({
        content: content,
        sightingId:sightingId
      });
      return res.json(newComment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  
}

module.exports = SightingsController;
