# API REST NTask
API para o gerenciamento de tarefas

## Descrição
API REST construída na plataforma Node.js, altamente escalável e de baixo nível.

### Frameworks utilizados
- Express
- Mocha
- ApiDoc

### Database
- SQLite
- Sequelize ORM (Object-Relational Mapper)

### Middlewares
- Helmet
- Cors
- Compression
- Passport -JWT (Json Web Token)

```JavaScript
import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import logger from "./logger.js";

module.exports = app => {
    ...
    app.use(helmet());
    app.use(cors());
    app.use(compression());
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
       app.use(express.static("public"));
}
    
```

### Comandos da aplicação
inicia a aplicação e atualiza a documentação
```bash
 npm start
 ``` 
 inicia a aplicação com os clusters
 ```bash
 npm clusters
 ``` 
 executa os teste com o Mocha
  ```bash
npm test
``` 
atualiza a documentação da API 
```bash
  npm apidoc
``` 
[documentação NTask](https://localhost:3000/apidoc)
