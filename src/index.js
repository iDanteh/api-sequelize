import express from 'express';
import { PORT } from './config.js'
import userRoutes from './routes/users.routes.js'
import morgan from 'morgan'
import sequelize from './config/database.js'

const app = express();

app.use(morgan('dev')); //Ver peticiones por consola en tiempo real 
app.use(express.json()); //Método para entender datos en formato JSON
app.use(userRoutes);

app.listen(PORT);
console.log('Server listening on port', PORT);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
}

testConnection();