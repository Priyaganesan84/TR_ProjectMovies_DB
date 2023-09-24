import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 6009,
  username: 'postgres', 
  password: 'password',
  database: 'tr_movies_db',
});


export default sequelize;
