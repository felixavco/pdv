const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportJWT = require('./passportJWT');

//Routes
const productRoutes = require('../routes/product.routes');
const storeRoutes = require('../routes/store.routes');
const userRoutes = require('../routes/user.routes');


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
    this.app.use(passport.initialize());
    passportJWT(passport)
  }

  routes() {
    this.app.use('/api/product', productRoutes);
    this.app.use('/api/store', storeRoutes);
    this.app.use('/api/user', userRoutes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on PORT: ${this.port}`);
    });
  }
}

module.exports = Server;











