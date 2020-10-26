
class ProductController {

  getProducts(req, res) {
    res.json({ message: 'here is the list of products' });
  }

}

module.exports = ProductController;