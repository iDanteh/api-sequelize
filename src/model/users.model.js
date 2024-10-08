import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Product extends Model {}

Product.init(
    {
        product_id: {
            type: DataTypes.UUID, //Autoincrementable
            defaultValue: DataTypes.UUIDV4, 
            primaryKey: true //Llave primaria
        },
        product_name: {
            type: DataTypes.STRING(50),
            allowNull: false //No permite campos vacíos
        },
        price: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
    {
        sequelize,
        modelName: 'Product',
        freezeTableName: true,
        tableName: 'products',
        schema: 'public'
    }
);

sequelize.sync()
    .then(() => {
        console.log('La tabla ha sido creada o ya existe');
    })
    .catch(error => {
        console.error('Error al sincronizar la base de datos:', error);
    });

export default Product;
// Probar la conexion de la base de datos
// node ./src/model/users.model.js

// async function testConection(){
//     try {
//         await sequelize.authenticate();
//         console.log("Connected")
//     } catch (error) {
//         console.log(error);
//     }
// }

// testConection();