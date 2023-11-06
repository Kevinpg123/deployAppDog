const { DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // console.log(Sequelize.UUIDV4);
  sequelize.define('dog', {
    
    id: {
      // type: Sequelize.UUID,
      //   defaultValue: Sequelize.literal('uuid_generate_v4()'),
      type:DataTypes.INTEGER,
        
      primaryKey: true,
      
      

    },
    reference_image_id: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, {timestamps: false});

  sequelize.beforeCreate(async (product, options) => {
    
      // Encuentra el valor máximo actual del id en la tabla
      const maxId = await sequelize.models.Dog.max('id');
      
    if (maxId > 250) {
        product.id = maxId + 1
    }
    else {
      
      // Aumenta el id en 1000 más que el valor máximo actual
      product.id = maxId + 1000;
    }
    
  });




};

