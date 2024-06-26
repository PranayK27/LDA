const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('./data/products')
const productsData = require('./data/products')

server.get('/api/users', (req, res, next) => {
  res.status(200).send(userData.getUsers);
});

server.get('/products', (req, res, next) => {
  res.status(200).send(productsData.getProducts);
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});
