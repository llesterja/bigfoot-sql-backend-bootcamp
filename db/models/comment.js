'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{key:"id"});
    }
  }
  comment.init({
    content: DataTypes.STRING,
    sighting_id: {
      type:DataTypes.INTEGER,
      references:{
        model:"sighting",
        key: "id",
    }}
  }, {
    sequelize,
    modelName: 'comment',
    underscored: true,
  });
  return comment;
};