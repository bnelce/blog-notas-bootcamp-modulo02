const express = require('express');

const server = express();
server.use(express.json())

const users = ['Abner', 'Pedrita', 'Leônidas'];


//index --> listar todos
server.get('/users', (req, res) => {
  return res.json(users)
})

//show -->  listar por index do array
server.get('/users/:index', (req, res) => {

  //buscando o nome utilizando route params
  const { index } = req.params;

  return res.json(users[index]);
});

//create
server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

//update
server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);

});

//destroy
server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

});









server.listen(3000);