const { response } = require('express');
const { Transaction, Product } = require('../models');
const transaction = require('../models/transaction');

class TransactionController {
  async insert(req, res) {
    const { id, storeId } = req.user;
    const { products } = req.body;

    try {
      const total = await this.updateProducts(products, storeId);
      const newTransaction = {
        total,
        storeId,
        userId: id,
        products: JSON.stringify(products),
      }

      const transtaction = await Transaction.create(newTransaction);
      return res.status(201).json(response(
        { id: transtaction.id, total: transaction.total }
      ))

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async updateProducts(products, storeId) {
    try {
      products.forEach((product) => {
        const { quantity } = await Product.findByPk(product.id);
        const newQty = quantity - products.units;
        await Product.update({ quantity: newQty }, { where: { id, storeId } });

        const total = products.reduce((acc, current) => {
          return acc + parseFloat(current.total);
        }, 0);

        return total;
      });
    } catch (error) {
      return response({ error: error.toString() }, false);
    }
  }
}

module.exports = TransactionController;