const express = require('express');
var cors = require('cors')

//Routes
const productRoutes = require('../routes/product.routes');

const corsOptions = {
  origin: ['http://localhost', 'https://favelar.cm'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.setup();
    this.routes()
  }

  setup() {
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/products', productRoutes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on PORT: ${this.port}`);
    });
  }
}

module.exports = Server;











