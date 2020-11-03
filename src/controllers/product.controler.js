const { Product } = require('../models');
const { response } = require('../utilities');
const { ROLES, messages } = require('../config');

class ProductController {

  async getList(req, res) {
    const { storeId } = req.user;
    let { orderby, order } = req.query;
    let page = parseInt(req.query.page, 10);
    let limit = parseInt(req.query.limit, 10);

    if (!page || page < 1) {
      page = 1;
    }

    if (!limit || limit < 10) {
      limit = 10
    }

    orderby = orderby !== undefined ? order.toLowerCase() : 'name';
    order = order !== undefined ? order.toUpperCase() : 'ASC';

    try {
      const products = await Product.findAndCountAll({
        where: { storeId },
        limit,
        offset: page - 1,
        order: [[orderby, order]],
        attributes: {
          include: ['id', 'productCode', 'name', 'quantity', 'unit', 'unitPrice', 'discount']
        }
      });

      if (!products) {
        return res.status(404).json(response({ message: messages.no_products }, false))
      }

      return res.json(response({ products }));

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async getOne(req, res) {
    const { productCode } = req.params;
    const { storeId } = req.user;

    try {
      const product = await Product.findOne({ where: { storeId, productCode } });
      if (!product) {
        return res.status(404).json(response({ message: messages.no_product }, false));
      }
      return res.json(response({ product }))
    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async create(req, res) {
    const { storeId, role } = req.user;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      )
    }

    const newProduct = {
      ...req.body,
      storeId,
    };

    try {
      const [product, success] = await Product.findOrCreate({
        where: { productCode },
        defaults: newProduct
      });

      if (!success) {
        return res.status(409).json(response({
          message: messages.product_already_exist
        }, false));
      }

      return res.status(201).json(response({ product }));

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async update(req, res) {
    const { storeId, role } = req.user;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      )
    }

    const updated = { ...req.body }
    const { id } = req.params

    try {
      const [success] = await Product.update(updated, { where: { id, storeId } });

      if (!success) {
        return res.status(404).json(response({ message: messages.no_product }, false));
      }

      return res.json(response({ updatedValues: updated }));

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async delete(req, res) {
    const { storeId, role } = req.user;
    const { id } = req.params;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      )
    }

    try {
      const deleted = await Product.destroy({ where: { storeId, id } });
      if (!deleted) {
        return res.status(404).json(response({ message: messages.no_product }, false));
      }

      return res.json(response({ id }));

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }

  }
}

module.exports = ProductController;