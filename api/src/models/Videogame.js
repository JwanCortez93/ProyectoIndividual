const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      platform: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
      },
      rating: {
        type: DataTypes.FLOAT,
      },

      genre: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
