//Commom JS ==> require
//ES modules ==> import & export 
//Aplicações HTTP => APIs
//const http = require('http') APIS: rotas, ...
// importar um módulo terceiro import fastify from fastify
//import http from 'node:http(cripto,path,)

import http from 'node:http'
//import { useActionState } from 'react'
//const server = http.createServer((request,response) => {
// através do req consigo criar um usuário: email, informações
// através do res conseguimos obter a resposta de quem está 'chamando' o servidor  

//Stateful => sempre terá algum tipo de informação sendo guardada em memória, ou seja
//ela depende da memória local e das informações que são salvas nela, para que ela continue funcionando igual
//VS
//Stateless => Não salva nada em memória, e sim em dispositivos externos como desktops, dados, arquivos
//de texto, não depende da memória.

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.end('Buscando usuários');
  }

  if (method === 'POST' && url ==='/users'){
    return res.end('Criando usuário');
}
    return res.end('Hello World');
})
server.listen(3333);
  //console.log(req.url, req.method)
  //console.log(req.headers) 

//localhost:3333 se eu não colocar nada e usar um método ele colocará como GET 
//Se eu colocar localhost:3333/users (GET/ users)
//Se eu colocar http POST localhost:3333/users (POST/ users)
//GET, PUT, POST, PATH, DELETE


// Rotas de Criação de usuários
//Rotas de Listagem de usuários
// Rotas de Edição de usuários
//Rotas de Remoção de usuário

//Metódo HTTP 
//Metódo URL

//GET => Buscar um recurso do Back-end
//POST => Criar um recurso no Back-end
//PUT => Editar/Atualização algum recurso do Back-end
//PATCH => Atualizar uma informação específica/única de um recurso no Back-end
//REMOVE => Remover um recurso do Back-end
