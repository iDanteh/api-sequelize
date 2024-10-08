// src/config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test', 'postgres', '190622', {
    host: '192.168.1.78',
    dialect: 'postgres',
    port: 5432
});

// Exportamos la conexión para usarla en otros módulos
export default sequelize;
