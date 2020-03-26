const express = require ('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Get: busca informações do Backend
 * Post: Cria informação no backend
 * Put: Altera informação no backend
 * Delete: deleta informação no backend
 */

 /**
  * Query Params: Parametros nomeados enviados na rota, apos o "?" (filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle...
   * NoSQL: MongoDB, CouchDB...
   */

   /**
    * Driver: select * from users
    * Query Builder: table('users').select('*').where('')
    */
    
app.listen(3333);
